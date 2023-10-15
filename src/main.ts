import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsuariosService } from './auth/usuarios/usuarios.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const usuarioService = app.get(UsuariosService);
  usuarioService.usuario_padrao();

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
