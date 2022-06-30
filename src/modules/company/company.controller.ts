import { GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';

import {
  COMPANY_SERVICE_NAME,
  COMPANY_UPDATE_METHOD,
  COMPANIES_GET_RPC_METHOD,
  COMPANY_CREATE_RPC_METHOD,
  COMPANY_GET_BYID_RPC_METHOD,
} from 'src/constants';
import { FindCompanyByIdDto } from './dto';
import { CompanyRepo } from './repos/company.repo';
import { PaginationParams } from './dto/get-companies.dto';
import { CreateCompanyDto, UpdateCompanyDto, } from './dto';
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from './interfaces';
import { ICompanyRepo } from './repos/companyRepo.interface';

@Controller()
export class CompanyController {
  @Inject(CompanyRepo)
  private readonly companyRepo: ICompanyRepo;

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_CREATE_RPC_METHOD)
  createCompany(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse> {
    return this.companyRepo.save(createCompanyDto);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANIES_GET_RPC_METHOD)
  getCompanies({ skip, limit }: PaginationParams): Promise<getCompaniesResponse> {
    return this.companyRepo.getCompanies(skip, limit);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_GET_BYID_RPC_METHOD)
  getCompanyById(payload: FindCompanyByIdDto): Promise<GetCompanyResponse> {
    return this.companyRepo.getCompanyById(payload);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, COMPANY_UPDATE_METHOD)
  updateCompany({ filter, fields, options }: UpdateCompanyDto): Promise<any> {
    console.log(filter, fields);
    return;
    // return this.companyRepo.updateCompany(filter, fields, options);
  }
}
