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
import { ServidorService } from './servidor.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';

@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Post()
  create(@Body() createServidorDto: CreateServidorDto) {
    return this.servidorService.create(createServidorDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.servidorService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servidorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServidorDto: UpdateServidorDto,
  ) {
    return this.servidorService.update(id, updateServidorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servidorService.remove(id);
  }
}
