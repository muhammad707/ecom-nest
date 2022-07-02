import { IsNotEmpty, IsString } from "class-validator";
import { GetCompanyRequest } from "src/modules/owner.pb";

export class GetCompanyByIdDto implements GetCompanyRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}