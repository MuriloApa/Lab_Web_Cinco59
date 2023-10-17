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
import { IndisponibilidadesService } from './indisponibilidades.service';
import { CreateIndisponibilidadeDto } from './dto/create-indisponibilidade.dto';
import { UpdateIndisponibilidadeDto } from './dto/update-indisponibilidade.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('indisponibilidades')
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@Controller('indisponibilidades')
export class IndisponibilidadesController {
  constructor(
    private readonly indisponibilidadesService: IndisponibilidadesService,
  ) {}

  @Post()
  create(@Body() createIndisponibilidadeDto: CreateIndisponibilidadeDto) {
    return this.indisponibilidadesService.create(createIndisponibilidadeDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.indisponibilidadesService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.indisponibilidadesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIndisponibilidadeDto: UpdateIndisponibilidadeDto,
  ) {
    return this.indisponibilidadesService.update(
      id,
      updateIndisponibilidadeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.indisponibilidadesService.remove(+id);
  }
}
