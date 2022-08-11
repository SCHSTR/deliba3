import { Injectable } from '@nestjs/common';
//import { CreateTrackDto } from './dto/create-track.dto';
//import { UpdateTrackDto } from './dto/update-track.dto';

import { rastrearEncomendas } from 'correios-brasil/dist';

@Injectable()
export class TrackService {

  async get_correios_status(track_code: string){
    const tracking = await rastrearEncomendas([track_code])
    const events = tracking[0].eventos
    
    if(track_code.length != 13) return `O código não parece ser um código valido.`    
    if(!events) return `Código invalido ou ainda não registrado`

    return `Você selecionou correios! O código de rastreio é: ${track_code}`
  }

  // create(createTrackDto: CreateTrackDto) {
  //   return 'This action adds a new track';
  // }

  // findAll() {
  //   return `This action returns all track`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} track`;
  // }

  // update(id: number, updateTrackDto: UpdateTrackDto) {
  //   return `This action updates a #${id} track`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} track`;
  // }
}
