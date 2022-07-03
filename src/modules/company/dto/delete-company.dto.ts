import { IsNotEmpty, IsString } from "class-validator";
import { DeleteCompanyRequest } from "src/modules/protocol-buffer-definitions/owner.pb";

export class DeleteCompanyRequestDto implements DeleteCompanyRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}