import { FilterQuery, UpdateQuery } from "mongoose";
import { CreateCompanyRequestDto, GetCompanyByIdDto, } from "../dto";
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from "../interfaces";
import { CompanyDocument } from "../schemas/company.schema";

export interface ICompanyRepo {
  getCompanies(skip, limit): Promise<getCompaniesResponse>
  getCompanyById(payload: GetCompanyByIdDto): Promise<GetCompanyResponse>;
  save(payload: CreateCompanyRequestDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  updateCompany(
    conditions: FilterQuery<CompanyDocument>,
    fields: UpdateQuery<CompanyDocument>,
    options: Record<string, unknown>
  ): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}