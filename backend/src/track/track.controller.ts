import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('method=:method&trackcode=:track_code&user=:token')
  main(@Param() params) {

    const method = params.method;
    const track_code = params.track_code;
    const user_token = params.token;

    switch (method) {
      case 'correios':
        return this.trackService.get_correios_status(track_code)
        break;
    
      default:
        return `Metodo não suportado`
        break;
    }
  }

  // @Post()
  // create(@Body() createTrackDto: CreateTrackDto) {
  //   return this.trackService.create(createTrackDto);
  // }

  // @Get()
  // findAll() {
  //   return this.trackService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.trackService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
  //   return this.trackService.update(+id, updateTrackDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trackService.remove(+id);
  // }
}
