import { CompanyData } from "./create-company.dto";
import { UpdateCompanyRequest } from "src/modules/owner.pb";

export class UpdateCompanyDtoRequest implements UpdateCompanyRequest {
  filter: UpdateCompanyRequestFilterDto;
  fields: CompanyData;
  options?: Record<string, unknown>;
}

class UpdateCompanyRequestFilterDto {
  id: string;
}
class UpdateCompanyRequestFieldsDto {
  fields: CompanyData
}