import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [{
  provide: 'DATABASE_CONNECTION',
  useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
    const host = configService.get<string>('database.host');
    const port = configService.get<number>('database.port');
    console.log('Hello')
    return await mongoose.connect(`mongodb://${host}:${port}/myapp`)
  }
}]