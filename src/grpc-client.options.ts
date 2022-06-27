import { join } from 'path';
import { Transport, ClientOptions } from '@nestjs/microservices';

const protoPath = join(__dirname, 'modules', 'companies', 'companies.proto');
console.log(protoPath);
export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'company',
    protoPath: join(__dirname, './modules/companies/company.proto'),
  }
}