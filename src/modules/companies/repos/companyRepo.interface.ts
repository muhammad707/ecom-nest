import { Types } from "mongoose";

import { Company } from "../interfaces";
import { CreateCompanyDto } from "../dto/create-company.dto";

export interface ICompanyRepo {
  // getCompanies(): Promise<Company[]>
  save(createCompanyDto: CreateCompanyDto): Promise<Company>;
  exisits(companyEmail: string): Promise<boolean>;
  // getCompanyById(id: Types.ObjectId): Promise<Company>;
  // updateCompany(companyData: Company): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}