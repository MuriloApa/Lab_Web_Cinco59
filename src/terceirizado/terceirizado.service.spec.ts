import { Test, TestingModule } from '@nestjs/testing';
import { TerceirizadoService } from './terceirizado.service';

describe('TerceirizadoService', () => {
  let service: TerceirizadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerceirizadoService],
    }).compile();

    service = module.get<TerceirizadoService>(TerceirizadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
