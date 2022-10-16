import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { HttpModule } from '@nestjs/axios'



@Module({
  controllers: [ConsultaController],
  providers: [ConsultaService, UserService, PrismaService],
  imports: [HttpModule]
})
export class ConsultaModule {}
