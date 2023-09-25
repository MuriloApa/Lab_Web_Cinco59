import { Test, TestingModule } from '@nestjs/testing';
import { PessoaFisicaController } from './pessoa-fisica.controller';
import { PessoaFisicaService } from './pessoa-fisica.service';

describe('PessoaFisicaController', () => {
  let controller: PessoaFisicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaFisicaController],
      providers: [PessoaFisicaService],
    }).compile();

    controller = module.get<PessoaFisicaController>(PessoaFisicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
