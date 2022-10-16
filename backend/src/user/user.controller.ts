import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';

import { createFromDiscord, createFromWebsite } from './createUser.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/complete-registration/discord')
  @UseInterceptors(FileInterceptor('file'))
  completeRegistration(@Body() userData: any){
    return this.userService.completeFromDiscord(userData);
  }

  @Post('/new/application')
  @UseInterceptors(FileInterceptor('file'))
  createWebsiteUser(@Body() userData: createFromWebsite){
    return this.userService.createFromWebsite(userData.email, userData.password)
  }

  @Post('/new/discord')
  @UseInterceptors(FileInterceptor('file'))
  createDiscordUser(@Body() userData: createFromDiscord){
    return this.userService.createFromDiscord(userData.discordId, userData.email)
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
