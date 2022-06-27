import { Document } from "mongoose";
import { HolderType, OrderType, Status } from "../enums";

export interface Company extends Document {
  status: Status;
  name: string;
  legalName: string;
  logo: string;
  description: string;
  mfo: string;
  holderType: HolderType;
  directorFullName: string;
  bankName: string;
  branchName: string;
  branchCode: string;
  oked: string;
  inn: string;
  phone: string;
  email: string;
  orderType: OrderType;
  legalAddress: string;
  address: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}