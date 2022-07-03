import { IsString, IsNumber } from "class-validator";

export class Address {
  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  name: string;

  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  home: string;

  @IsString()
  postalCode: string;

  @IsString()
  apartment: string;

  @IsString()
  comment: string;

  @IsString()
  domofon: string;

  @IsString()
  address: string;

  @IsNumber()
  regionId: number;

  @IsNumber()
  districtId: number;
}