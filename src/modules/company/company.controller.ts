import { GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';

import { CompanyRepo } from './repos/company.repo';
import { COMPANY_CREATE_RPC_METHOD, COMPANY_SERVICE_NAME } from 'src/constants';
import { CreateCompanyDto, CreateCompanyResponse } from './dto/create-company.dto';

@Controller()
export class CompanyController {
  @Inject(CompanyRepo)
  private readonly companyRepo: CompanyRepo;

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_CREATE_RPC_METHOD)
  createCompany(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse> {
    return this.companyRepo.save(createCompanyDto);
  }
}
