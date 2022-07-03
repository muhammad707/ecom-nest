import { join } from 'path';
import { Transport, ClientOptions } from '@nestjs/microservices';

import { protobufPackage } from './modules/protocol-buffer-definitions/owner.pb';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: protobufPackage,
    protoPath: join('node_modules/owner-proto/proto/owner.proto'),
  }
}