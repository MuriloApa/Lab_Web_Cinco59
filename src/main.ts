import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import metadata from './metadata'; // <-- file auto-generated by the "PluginMetadataGenerator"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

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
    .addTag('auth')
    .addTag('afastamentos')
    .addTag('cargo')
    .addTag('designacoes')
    .addTag('estado')
    .addTag('funcao')
    .addTag('genero')
    .addTag('indisponibilidades')
    .addTag('municipio')
    .addTag('pais')
    .addTag('servidor')
    .addTag('terceirizado')
    .addTag('unidade')
    .addTag('user')
    .build();

  await SwaggerModule.loadPluginMetadata(metadata); // <-- here

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
