import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndiponibilidadesService } from './indiponibilidades.service';
import { CreateIndiponibilidadeDto } from './dto/create-indiponibilidade.dto';
import { UpdateIndiponibilidadeDto } from './dto/update-indiponibilidade.dto';

@Controller('indiponibilidades')
export class IndiponibilidadesController {
  constructor(private readonly indiponibilidadesService: IndiponibilidadesService) {}

  @Post()
  create(@Body() createIndiponibilidadeDto: CreateIndiponibilidadeDto) {
    return this.indiponibilidadesService.create(createIndiponibilidadeDto);
  }

  @Get()
  findAll() {
    return this.indiponibilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indiponibilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndiponibilidadeDto: UpdateIndiponibilidadeDto) {
    return this.indiponibilidadesService.update(+id, updateIndiponibilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indiponibilidadesService.remove(+id);
  }
}
