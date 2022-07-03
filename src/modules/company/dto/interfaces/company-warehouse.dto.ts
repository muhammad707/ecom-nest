import { IsNotEmpty, IsNumber, IsString, ValidateNested, IsDate } from "class-validator";
import { Address } from ".";

export class CompanyWarehouse {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  address: Address;

  @IsNumber()
  status: number;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  @IsNumber()
  deletedAt: number;
}