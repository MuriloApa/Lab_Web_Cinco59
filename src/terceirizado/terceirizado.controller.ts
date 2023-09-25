import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerceirizadoService } from './terceirizado.service';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';

@Controller('terceirizado')
export class TerceirizadoController {
  constructor(private readonly terceirizadoService: TerceirizadoService) {}

  @Post()
  create(@Body() createTerceirizadoDto: CreateTerceirizadoDto) {
    return this.terceirizadoService.create(createTerceirizadoDto);
  }

  @Get()
  findAll() {
    return this.terceirizadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terceirizadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerceirizadoDto: UpdateTerceirizadoDto) {
    return this.terceirizadoService.update(+id, updateTerceirizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terceirizadoService.remove(+id);
  }
}
