import { Model } from "mongoose";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

import { Company } from "../interfaces";
import { COMPANY_MODEL } from "src/constants";
import { ICompanyRepo } from "./companyRepo.interface";
import { CreateCompanyDto, CreateCompanyResponse } from "../dto/create-company.dto";

@Injectable()
export class CompanyRepo implements ICompanyRepo {
  constructor(@Inject(COMPANY_MODEL) private readonly companyModel: Model<Company>) { }

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