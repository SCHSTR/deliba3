import { Controller, UseGuards, Get, Post, Body, Patch, Delete, Param, UseInterceptors } from '@nestjs/common';
import { Public } from './constants';

import { FileInterceptor } from '@nestjs/platform-express';


@Controller('auth')
export class AuthController {
    
    @Public()
    @Post('register')
    @UseInterceptors(FileInterceptor('file'))
    main(@Body() body: any) {

        console.log(body)

        return body
    }

}