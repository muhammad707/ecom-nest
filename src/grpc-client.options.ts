import { join } from 'path';
import { Transport, ClientOptions } from '@nestjs/microservices';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'company',
    protoPath: join(__dirname, './modules/company/company.proto'),
  }
}