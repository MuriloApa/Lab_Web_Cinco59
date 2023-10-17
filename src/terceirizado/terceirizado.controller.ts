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
import { TerceirizadoService } from './terceirizado.service';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/roles.enum';

@UseGuards(RolesGuard)
@Controller('terceirizado')
export class TerceirizadoController {
  constructor(private readonly terceirizadoService: TerceirizadoService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createTerceirizadoDto: CreateTerceirizadoDto) {
    return this.terceirizadoService.create(createTerceirizadoDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.terceirizadoService.findAll({ page, limit }, search);
  }

  @Roles(Role.COMUM, Role.ADMIN)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.terceirizadoService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTerceirizadoDto: UpdateTerceirizadoDto,
  ) {
    return this.terceirizadoService.update(id, updateTerceirizadoDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.terceirizadoService.remove(id);
  }
}
