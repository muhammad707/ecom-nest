import { GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';

import {
  COMPANY_UPDATE_METHOD,
  COMPANIES_GET_RPC_METHOD,
  COMPANY_CREATE_RPC_METHOD,
  COMPANY_GET_BYID_RPC_METHOD,
} from 'src/constants';
import { CompanyRepo } from './repos/company.repo';
import { COMPANY_SERVICE_NAME } from '../owner.pb';
import { PaginationParams } from './dto/get-companies.dto';
import { ICompanyRepo } from './repos/companyRepo.interface';
import { CreateCompanyRequestDto, GetCompanyByIdDto } from './dto';
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from './interfaces';

@Controller()
export class CompanyController {
  @Inject(CompanyRepo)
  private readonly companyRepo: ICompanyRepo;

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_CREATE_RPC_METHOD)
  createCompany(payload: CreateCompanyRequestDto): Promise<CreateCompanyResponse> {
    return this.companyRepo.save(payload);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANIES_GET_RPC_METHOD)
  getCompanies({ skip, limit }: PaginationParams): Promise<getCompaniesResponse> {
    return this.companyRepo.getCompanies(skip, limit);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_GET_BYID_RPC_METHOD)
  getCompanyById(payload: GetCompanyByIdDto): Promise<GetCompanyResponse> {
    return this.companyRepo.getCompanyById(payload);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_UPDATE_METHOD)
  updateCompany(payload: any): Promise<any> {
    console.log(payload);
    return;
    // return this.companyRepo.updateCompany(filter, fields, options);
  }
}
