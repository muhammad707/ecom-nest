import { Model, FilterQuery, UpdateQuery } from "mongoose";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

import { COMPANY_MODEL } from "src/constants";
import { ICompanyRepo } from "./companyRepo.interface";
import { CreateCompanyDto, FindCompanyByIdDto, PaginationParams } from "../dto";
import { Company, getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from "../interfaces";
import { CompanyDocument } from "../schemas/company.schema";

@Injectable()
export class CompanyRepo implements ICompanyRepo {
  constructor(@Inject(COMPANY_MODEL) private readonly companyModel: Model<Company>) { }

  async getCompanies(documentsToSkip = 0, limitOfDocuments?: number): Promise<getCompaniesResponse> {
    const findQuery = this.companyModel
      .find()
      .sort({ _id: -1 })
      .skip(documentsToSkip)

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments);
    }

    const companies: Company[] = await findQuery;
    const count = await this.companyModel.count();
    return {
      data: companies,
      count: count,
      error: null,
      status: HttpStatus.OK
    }
  }

  async getCompanyById({ id }: FindCompanyByIdDto): Promise<GetCompanyResponse> {
    let company: Company = await this.companyModel.findOne({ _id: id });
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

  async updateCompany(
    conditions: FilterQuery<CompanyDocument>,
    fields: UpdateQuery<CompanyDocument>,
    options: Record<string, unknown> = {}): Promise<any> {
    const result = await this.companyModel.findOneAndUpdate(conditions, fields, { new: true, ...options });
    return result;
  }

  async exisits(companyEmail: string): Promise<boolean> {
    return false;
  }
}