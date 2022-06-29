import { Types } from "mongoose";

import { CreateCompanyDto, CreateCompanyResponse } from "../dto/create-company.dto";
import { Company, getCompaniesResponse, GetCompanyResponse } from "../interfaces";

export interface ICompanyRepo {
  getCompanies(): Promise<getCompaniesResponse>
  save(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  getCompanyById(id: Types.ObjectId): Promise<GetCompanyResponse>;
  // updateCompany(companyData: Company): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}