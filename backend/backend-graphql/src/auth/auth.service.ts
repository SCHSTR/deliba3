import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/models/user';
import { UsersService } from 'src/users/users.service';
import { jwtSecret } from './constats';

@Injectable()
export class AuthService {

    constructor( 
        private readonly usersService: UsersService, 
        private readonly jwtService: JwtService 
    ) {}

    //Essa função deverá
    //ser assincrona em prod
    //pois precisa buscar o user
    //no bando de dados
    validate(email: string, password: string): User | null {
        const user = this.usersService.getUserByEmail(email) // Aqui dever pegar o user do bando de dados, portanto await em prod
    
        if(!user) return null

        const passwordIsValid = password === user.password
        return passwordIsValid ? user : null
    }

    login(user: User): { access_token: string } {
        const payload = {
            email: user.email,
            sub: user.userId
        }

        return{
            access_token: this.jwtService.sign(payload),
        }
    }

    //Essa função deverá
    //ser assincrona em prod
    //pois precisa buscar o user
    //no bando de dados
    verify(token: string): User {
        const decoded = this.jwtService.verify(token, { secret: jwtSecret })

        const user = this.usersService.getUserByEmail(decoded.email)

        if(!user) {throw new Error('Unable to get the user from decoded token.')}

        return user;
    }
}
