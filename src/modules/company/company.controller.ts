import { GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';

import { CompanyRepo } from './repos/company.repo';
import {
  COMPANY_SERVICE_NAME,
  COMPANIES_GET_RPC_METHOD,
  COMPANY_CREATE_RPC_METHOD,
  COMPANY_GET_BYID_RPC_METHOD,
} from 'src/constants';
import { CreateCompanyDto, } from './dto';
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from './interfaces';
import { FindCompanyByIdDto } from './dto';

@Controller()
export class CompanyController {
  @Inject(CompanyRepo)
  private readonly companyRepo: CompanyRepo;

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_CREATE_RPC_METHOD)
  createCompany(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse> {
    return this.companyRepo.save(createCompanyDto);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANIES_GET_RPC_METHOD)
  getCompanies(): Promise<getCompaniesResponse> {
    return this.companyRepo.getCompanies();
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_GET_BYID_RPC_METHOD)
  getCompanyById(payload: FindCompanyByIdDto): Promise<GetCompanyResponse> {
    return this.companyRepo.getCompanyById(payload);
  }

}
