import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Activation des extensions
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  // // Activation de Swagger
  // const doc = SwaggerModule.createDocument(
  //   app,
  //   new DocumentBuilder()
  //     .setTitle('Pizza API')
  //     .setDescription('Une API de démonstration pour MyDigitalSchool')
  //     .setVersion('1.0')
  //     .addTag('Pizza')
  //     .build(),
  // );
  // SwaggerModule.setup('docs', app, doc);

  // Ecoute du port
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
