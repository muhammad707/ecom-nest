import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';

import { grpcClientOptions } from './grpc-client.options';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  await app.startAllMicroservices();
  await app.listen(5000);
  // console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
