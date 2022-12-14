import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import configuration from './config/configuration';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration]
  }), CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
