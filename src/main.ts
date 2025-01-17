import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const logger = new Logger('OrdersMS-main')
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport:Transport.TCP,
    options:{
      port: envs.port
    }
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )

  await app.listen();
  logger.log(`Implements Microservices run in port ${envs.port}`)
}
bootstrap();
