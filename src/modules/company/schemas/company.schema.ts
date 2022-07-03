import { Document } from "mongoose";
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

import { CompanyTimeTable, Address, CompanyWarehouse, CompanyEmployee } from ".";
import { HolderType, OrderType, Status } from "../enums";


export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {

  /* Status enum */
  @Prop({ default: Status.PENDING })
  status: Status;

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
  @Prop({ default: HolderType.LTD })
  holderType: HolderType

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
  @Prop({ default: OrderType.END_PRODUCT })
  orderType: HolderType

  @Prop()
  legalAddress: string;

  @Prop(raw(Address))
  address: Address;

  @Prop(raw(CompanyTimeTable))
  timetable: CompanyTimeTable;

  @Prop([raw(CompanyWarehouse)])
  warehouses: CompanyWarehouse[];

  @Prop([raw(CompanyEmployee)])
  employees: CompanyEmployee[];

}

export const CompanySchema = SchemaFactory.createForClass(Company);