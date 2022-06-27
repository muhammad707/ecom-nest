import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';

import { grpcClientOptions } from './grpc-client.options';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservices();
}
bootstrap();
