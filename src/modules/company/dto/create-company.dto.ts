import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

import { HolderType, OrderType, Status } from "../enums";
import { Address, CompanyEmployee, CompanyWarehouse, CompanyTimeTable } from "./interfaces";
import { CreateCompanyRequest } from "src/modules/protocol-buffer-definitions/owner.pb";
// Company document creation
export class CreateCompanyRequestDto implements CreateCompanyRequest {
  companyData: CompanyData;
}

export class CompanyData {
  @IsEnum(Status)
  public readonly status: Status;

  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  public readonly legalName: string;

  @IsString()
  public readonly logo: string;

  @IsString()
  public readonly description: string;

  @IsString()
  public readonly mfo: string;

  @IsEnum(HolderType)
  public readonly holderType: HolderType;

  @IsString()
  @IsNotEmpty()
  public readonly directorFullName: string;

  @IsString()
  @IsNotEmpty()
  public readonly bankName: string;

  @IsString()
  @IsNotEmpty()
  public readonly branchName: string;

  @IsString()
  @IsNotEmpty()
  public readonly branchCode: string;

  @IsString()
  public readonly oked: string;

  @IsString()
  public readonly inn: string;

  @IsString()
  @IsNotEmpty()
  public readonly phone: string;

  @IsString()
  @IsEmail()
  public readonly email: string;

  @IsEnum(OrderType)
  public readonly orderType: OrderType;

  @IsString()
  public readonly legalAddress: string;

  @ValidateNested()
  public readonly address: Address;

  @ValidateNested()
  public readonly warehouses: CompanyWarehouse[]

  @ValidateNested()
  public readonly employees: CompanyEmployee[]

  @ValidateNested()
  public readonly timetable: CompanyTimeTable;

  @IsNumber()
  public readonly createdAt: number;

  @IsNumber()
  public readonly updatedAt: number;

  @IsNumber()
  public readonly deletedAt: number;

}
