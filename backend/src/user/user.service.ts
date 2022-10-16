import { Injectable } from '@nestjs/common';
import { Prisma, Profile } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  //CREATE ACCOUNTS FROM WEBSITE ORIGIN
  async createFromWebsite(email: string, password: string){
    const checkEmail = await this.findUserByEmail(email)
    if(checkEmail) return `This email is already being used`

    const account = await this.prisma.user.create({data: {email: email, password: password}})
    return{
      creation: 'scuccess',
      data: account
    }
  }

  //CREATE ACCOUNTS FROM DISCORD ORIGIN
  //USES DISCORD USER ID AND EMAIL FOR REGISTRATION
  //DONT CREATES A PASSWORD SINCE ITS BEING USED BY A
  //THIRD PARTY APPLICATION
  async createFromDiscord(discordId: string, email: string){
    const checkEmail = await this.findUserByEmail(email)
    const checkDiscordId = await this.findUserByDiscord(discordId)

    if(checkEmail) return {success: false, error: 'Esse email já está sendo utilizado 😢'}
    if(checkDiscordId) return {success: false, error: 'Parece que esse discord já foi registrado 🤔'}

    const account = await this.prisma.user.create({ data: {discordId: discordId, email: email} })
    return {
      success: true,
      data: account
    }
  }


  async completeFromDiscord(data: Prisma.ProfileCreateInput): Promise<Profile>  {
      return await this.prisma.profile.create({ data })
  }

  //GET USER DISCORD ID 
  findUserByDiscord(discordId: string){
    return this.prisma.user.findFirst({where: {discordId: discordId}})
  }

  //GET USER EMAIL
  findUserByEmail(email: string){
    return this.prisma.user.findFirst({where: {email: email}})
  }
}
