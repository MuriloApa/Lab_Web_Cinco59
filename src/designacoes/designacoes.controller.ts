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
import { DesignacoesService } from './designacoes.service';
import { CreateDesignacoeDto } from './dto/create-designacoe.dto';
import { UpdateDesignacoeDto } from './dto/update-designacoe.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('designacoes')
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
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
    return this.designacoesService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.designacoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDesignacoeDto: UpdateDesignacoeDto,
  ) {
    return this.designacoesService.update(id, updateDesignacoeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.designacoesService.remove(id);
  }
}
