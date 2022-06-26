import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyDocument = Company & Document;

@Schema()
export class Company {

  /* Status enum */

  @Prop()
  name: string;

  @Prop()
  legalName: string;

  @Prop()
  logo: string;

  @Prop()
  description: string;

  @Prop()
  mfo: string;

  /* holderType enum */

  @Prop()
  directorFullName: string;

  @Prop()
  bankName: string;

  @Prop()
  branchName: string;

  @Prop()
  branchCode: string;

  @Prop()
  oked: string;

  @Prop()
  inn: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  /* orderType enum */

  @Prop()
  legalAddress: string;

  /* reference addressId */
}

export const CompanySchema = SchemaFactory.createForClass(Company);