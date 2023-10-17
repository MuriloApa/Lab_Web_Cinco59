import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Projeto Cinco59')
    .setDescription('Descrição da API para o sistema Cinco59')
    .setVersion('1.0')
    .addTag('cargo')
    .addTag('endereco')
    .addTag('estado')
    .addTag('funcao')
    .addTag('genero')
    .addTag('municipio')
    .addTag('pais')
    .addTag('pessoa-fisica')
    .addTag('servidor')
    .addTag('telefone')
    .addTag('terceirizado')
    .addTag('unidade')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
