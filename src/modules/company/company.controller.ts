import { GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';

import {
  COMPANY_UPDATE_METHOD,
  COMPANIES_GET_RPC_METHOD,
  COMPANY_CREATE_RPC_METHOD,
  COMPANY_GET_BYID_RPC_METHOD,
} from 'src/constants';
import { CompanyRepo } from './repos/company.repo';
import { OWNER_SERVICE_NAME } from '../owner.pb';
import { PaginationParams } from './dto/get-companies.dto';
import { ICompanyRepo } from './repos/companyRepo.interface';
import { CreateCompanyRequestDto, GetCompanyByIdDto } from './dto';
import { GetCompanyResponse, CreateCompanyResponse, GetCompaniesResponse } from './interfaces';

@Controller()
export class CompanyController {
  @Inject(CompanyRepo)
  private readonly companyRepo: ICompanyRepo;

  @GrpcMethod(OWNER_SERVICE_NAME, COMPANY_CREATE_RPC_METHOD)
  createCompany(payload: CreateCompanyRequestDto): Promise<CreateCompanyResponse> {
    return this.companyRepo.save(payload);
  }

  @GrpcMethod(OWNER_SERVICE_NAME, COMPANIES_GET_RPC_METHOD)
  getCompanies({ skip, limit }: PaginationParams): Promise<GetCompaniesResponse> {
    return this.companyRepo.getCompanies(skip, limit);
  }

  @GrpcMethod(OWNER_SERVICE_NAME, COMPANY_GET_BYID_RPC_METHOD)
  getCompanyById(payload: GetCompanyByIdDto): Promise<GetCompanyResponse> {
    return this.companyRepo.getCompanyById(payload);
  }

  @GrpcMethod(OWNER_SERVICE_NAME, COMPANY_UPDATE_METHOD)
  updateCompany(payload: any): Promise<any> {
    console.log(payload);
    return this.companyRepo.updateCompany(payload);
  }
}
