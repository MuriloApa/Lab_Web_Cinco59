import { Test, TestingModule } from '@nestjs/testing';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';

describe('ServidorController', () => {
  let controller: ServidorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServidorController],
      providers: [ServidorService],
    }).compile();

    controller = module.get<ServidorController>(ServidorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
