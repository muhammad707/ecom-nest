import { IsNotEmpty, IsString } from "class-validator";
import { GetCompanyRequest } from "src/modules/protocol-buffer-definitions/owner.pb";

export class GetCompanyByIdDto implements GetCompanyRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}