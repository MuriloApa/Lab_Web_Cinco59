import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesignacoesService } from './designacoes.service';
import { CreateDesignacoeDto } from './dto/create-designacoe.dto';
import { UpdateDesignacoeDto } from './dto/update-designacoe.dto';

@Controller('designacoes')
export class DesignacoesController {
  constructor(private readonly designacoesService: DesignacoesService) {}

  @Post()
  create(@Body() createDesignacoeDto: CreateDesignacoeDto) {
    return this.designacoesService.create(createDesignacoeDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.designacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDesignacoeDto: UpdateDesignacoeDto,
  ) {
    return this.designacoesService.update(+id, updateDesignacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designacoesService.remove(+id);
  }
}
