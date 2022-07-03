import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CompanyEmployee {

  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsString()
  position: string;

  @IsString()
  level: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  @IsNumber()
  deletedAt: number;
}