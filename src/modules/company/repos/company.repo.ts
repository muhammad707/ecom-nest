import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";

import { Company } from "../interfaces";
import { COMPANY_MODEL } from "src/constants";
import { ICompanyRepo } from "./companyRepo.interface";
import { CreateCompanyDto } from "../dto/create-company.dto";

@Injectable()
export class CompanyRepo implements ICompanyRepo {
  constructor(@Inject(COMPANY_MODEL) private readonly companyModel: Model<Company>) { }

  async save(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = await this.companyModel.create(createCompanyDto);
    return createdCompany;
  }

  async exisits(companyEmail: string): Promise<boolean> {
    return false;
  }
}