import { Test, TestingModule } from '@nestjs/testing';
import { TerceirizadoController } from './terceirizado.controller';
import { TerceirizadoService } from './terceirizado.service';

describe('TerceirizadoController', () => {
  let controller: TerceirizadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerceirizadoController],
      providers: [TerceirizadoService],
    }).compile();

    controller = module.get<TerceirizadoController>(TerceirizadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
