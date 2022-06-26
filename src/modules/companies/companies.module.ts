import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { companiesProviders } from './companies.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...companiesProviders]
})
export class CompaniesModule { }
