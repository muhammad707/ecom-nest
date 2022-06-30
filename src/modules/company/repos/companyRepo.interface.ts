import { FindCompanyByIdDto, CreateCompanyDto } from "../dto";
import { getCompaniesResponse, GetCompanyResponse, CreateCompanyResponse } from "../interfaces";

export interface ICompanyRepo {
  getCompanies(skip, limit): Promise<getCompaniesResponse>
  getCompanyById(payload: FindCompanyByIdDto): Promise<GetCompanyResponse>;
  save(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  // updateCompany(companyData: Company): Promise<void>;
  // deleteCompany(id: Types.ObjectId): Promise<boolean>;
}