import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { companyProviders } from './company.providers';
import { CompanyController } from './company.controller';
import { CompanyRepo } from './repos/company.repo';

@Module({
  imports: [DatabaseModule],
  providers: [...companyProviders, CompanyRepo],
  controllers: [CompanyController]
})
export class CompanyModule { }
