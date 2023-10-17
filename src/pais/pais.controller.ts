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
import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Role } from 'src/shared/enums/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pais')
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Post()
  create(@Body() createPaiDto: CreatePaisDto) {
    return this.paisService.create(createPaiDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.paisService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paisService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaiDto: UpdatePaisDto,
  ) {
    return this.paisService.update(id, updatePaiDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paisService.remove(id);
  }
}
