import { IsNotEmpty, IsNumber } from "class-validator";

export class CompanyTimeTable {
  @IsNumber()
  @IsNotEmpty()
  startTime: number;

  @IsNumber()
  @IsNotEmpty()
  endTime: number;

  @IsNumber()
  @IsNotEmpty()
  day: number;

  @IsNumber()
  @IsNotEmpty()
  status: number;

}