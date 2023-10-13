import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
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
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.terceirizadoService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.terceirizadoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTerceirizadoDto: UpdateTerceirizadoDto,
  ) {
    return this.terceirizadoService.update(id, updateTerceirizadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.terceirizadoService.remove(id);
  }
}
