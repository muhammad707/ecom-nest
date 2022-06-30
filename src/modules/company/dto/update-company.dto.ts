import { FilterQuery, UpdateQuery } from "mongoose";
import { CompanyDocument } from "../schemas/company.schema";

export class UpdateCompanyDto {
  filter: FilterQuery<CompanyDocument>;
  fields: UpdateQuery<CompanyDocument>;
  options: Record<string, unknown>;
}
