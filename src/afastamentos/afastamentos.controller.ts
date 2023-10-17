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
  UseGuards,
} from '@nestjs/common';
import { AfastamentosService } from './afastamentos.service';
import { CreateAfastamentoDto } from './dto/create-afastamento.dto';
import { UpdateAfastamentoDto } from './dto/update-afastamento.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/roles.enum';

@UseGuards()
@Controller('afastamentos')
export class AfastamentosController {
  constructor(private readonly afastamentosService: AfastamentosService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createAfastamentoDto: CreateAfastamentoDto) {
    return this.afastamentosService.create(createAfastamentoDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.afastamentosService.findAll({ page, limit }, search);
  }

  @Roles(Role.COMUM)
  @Get(':porPeriodo')
  findPeriodo(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('dataInicial') dataInicial: string,
    @Query('dataFinal') dataFinal: string,
  ) {
    return this.afastamentosService.find_per_period(
      { page, limit },
      new Date(dataInicial),
      new Date(dataFinal),
    );
  }

  @Roles(Role.COMUM)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.afastamentosService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAfastamentoDto: UpdateAfastamentoDto,
  ) {
    return this.afastamentosService.update(id, updateAfastamentoDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.afastamentosService.remove(id);
  }
}
