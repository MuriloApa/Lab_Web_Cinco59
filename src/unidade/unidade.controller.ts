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
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { Role } from 'src/shared/enums/roles.enum';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}

  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadeService.create(createUnidadeDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.unidadeService.findAll({ page, limit }, search);
  }

  @Get(':ordenacaoForcada')
  findAllForced(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.unidadeService.findAllForced({ page, limit });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.unidadeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUnidadeDto: UpdateUnidadeDto,
  ) {
    return this.unidadeService.update(id, updateUnidadeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.unidadeService.remove(id);
  }
}
