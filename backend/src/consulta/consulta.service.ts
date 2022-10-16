import { Injectable } from '@nestjs/common';
import { HttpService} from '@nestjs/axios'
import { UserService } from 'src/user/user.service';
import { Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios'

@Injectable()
export class ConsultaService {
  constructor( private userService: UserService, private httpService: HttpService ) {}

  create() {
    return 'This action adds a new consulta';
  }

  async consultaFromDiscord(reqData) {
    const id = reqData.discordId
    const code = reqData.trackCode
  
    const isRegistered = await this.userService.findUserByDiscord(id)
    if(!isRegistered) return {success: false, error: `Parece que você não está registrado, tente novamente após se registrar 😢`}
    if(code.length != 13) return {success: false, error: `Seu código não parece um ser um código dos correios 😢`}

    let x = await this.getEncomenda(code)
    console.log(x.data.data.events)

    return {success: true, content: `Dados recebidos no backend`}
  }

  getEncomenda(trackCode: any): Promise<AxiosResponse> {
    return this.httpService.axiosRef.get(`https://api.melhorrastreio.com.br/api/v1/trackings/${trackCode}`);
  }

}
