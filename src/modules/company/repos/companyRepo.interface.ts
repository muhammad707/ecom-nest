import { FilterQuery, UpdateQuery } from "mongoose";
import { FindCompanyByIdDto, CreateCompanyDto } from "../dto";
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from "../interfaces";
import { CompanyDocument } from "../schemas/company.schema";

export interface ICompanyRepo {
  getCompanies(skip, limit): Promise<getCompaniesResponse>
  getCompanyById(payload: FindCompanyByIdDto): Promise<GetCompanyResponse>;
  save(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  updateCompany(
    conditions: FilterQuery<CompanyDocument>,
    fields: UpdateQuery<CompanyDocument>,
    options: Record<string, unknown>
  ): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}