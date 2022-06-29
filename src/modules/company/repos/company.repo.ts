import { Model, Types } from "mongoose";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

import { COMPANY_MODEL } from "src/constants";
import { ICompanyRepo } from "./companyRepo.interface";
import { CreateCompanyDto, FindCompanyByIdDto } from "../dto";
import { Company, getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from "../interfaces";

@Injectable()
export class CompanyRepo implements ICompanyRepo {
  constructor(@Inject(COMPANY_MODEL) private readonly companyModel: Model<Company>) { }

  async getCompanies(): Promise<getCompaniesResponse> {
    let companies: Company[] = await this.companyModel.find();
    return {
      data: companies,
      error: null,
      status: HttpStatus.OK
    }
  }

  async getCompanyById(payload: FindCompanyByIdDto): Promise<GetCompanyResponse> {
    let company: Company = await this.companyModel.findOne(payload);
    if (!company) {
      return {
        data: null,
        error: ['Product not found'],
        status: HttpStatus.NOT_FOUND
      }
    }

    return {
      data: company,
      error: null,
      status: HttpStatus.OK
    }
  }

  async save(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse> {
    const createdCompany = await this.companyModel.create(createCompanyDto);
    return {
      id: createdCompany._id,
      error: null,
      status: HttpStatus.OK
    }
  }

  async exisits(companyEmail: string): Promise<boolean> {
    return false;
  }
}