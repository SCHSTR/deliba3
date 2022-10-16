import { Controller, UseInterceptors, Post, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConsultaService } from './consulta.service';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post('/discord')
  @UseInterceptors(FileInterceptor('file'))
  completeRegistration(@Body() reqData: any){
    return this.consultaService.consultaFromDiscord(reqData);
  }
}
