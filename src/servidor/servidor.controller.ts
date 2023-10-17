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
import { ServidorService } from './servidor.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/roles.enum';

@UseGuards()
@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createServidorDto: CreateServidorDto) {
    return this.servidorService.create(createServidorDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.servidorService.findAll({ page, limit }, search);
  }

  @Roles(Role.COMUM, Role.ADMIN)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servidorService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServidorDto: UpdateServidorDto,
  ) {
    return this.servidorService.update(id, updateServidorDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servidorService.remove(id);
  }
}
