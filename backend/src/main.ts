import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Prefix
  // app.setGlobalPrefix('api'); // Comentado: el prefijo API se maneja en el frontend

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades que no están en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades no permitidas
      transform: true, // Transforma el payload a una instancia del DTO
    }),
  );

  // Cookie Parser
  app.use(cookieParser());

  // CORS
  app.enableCors({
    origin: 'http://localhost:5173', // La URL de tu frontend
    credentials: true,
  });

  // Port
  await app.listen(3001);
}
bootstrap();