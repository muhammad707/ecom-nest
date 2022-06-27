import { Types } from "mongoose";

import { CreateCompanyDto, CreateCompanyResponse } from "../dto/create-company.dto";

export interface ICompanyRepo {
  // getCompanies(): Promise<Company[]>
  save(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  // getCompanyById(id: Types.ObjectId): Promise<Company>;
  // updateCompany(companyData: Company): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}