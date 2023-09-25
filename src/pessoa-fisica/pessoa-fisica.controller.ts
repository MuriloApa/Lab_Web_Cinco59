import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoaFisicaService } from './pessoa-fisica.service';
import { CreatePessoaFisicaDto } from './dto/create-pessoa-fisica.dto';
import { UpdatePessoaFisicaDto } from './dto/update-pessoa-fisica.dto';

@Controller('pessoa-fisica')
export class PessoaFisicaController {
  constructor(private readonly pessoaFisicaService: PessoaFisicaService) {}

  @Post()
  create(@Body() createPessoaFisicaDto: CreatePessoaFisicaDto) {
    return this.pessoaFisicaService.create(createPessoaFisicaDto);
  }

  @Get()
  findAll() {
    return this.pessoaFisicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaFisicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaFisicaDto: UpdatePessoaFisicaDto) {
    return this.pessoaFisicaService.update(+id, updatePessoaFisicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaFisicaService.remove(+id);
  }
}
