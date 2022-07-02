import { DeleteCompanyResponse } from "src/modules/owner.pb";
import { CreateCompanyRequestDto, GetCompanyByIdDto, UpdateCompanyDtoRequest, } from "../dto";
import { GetCompanyResponse, CreateCompanyResponse, GetCompaniesResponse } from "../interfaces";

export interface ICompanyRepo {
  getCompanies(skip: number, limit?: number): Promise<GetCompaniesResponse>
  getCompanyById(payload: GetCompanyByIdDto): Promise<GetCompanyResponse>;
  save(payload: CreateCompanyRequestDto): Promise<CreateCompanyResponse>;
  exisits(companyEmail: string): Promise<boolean>;
  updateCompany(payload: UpdateCompanyDtoRequest): Promise<void>;
  deleteCompany(id: string): Promise<DeleteCompanyResponse>;
}