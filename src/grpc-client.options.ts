import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'companies',
    protoPath: join(__dirname, 'modules', 'companies', 'companies.proto'),
  }
}