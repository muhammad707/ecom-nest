import { Types } from "mongoose";
import { HolderType, OrderType, Status } from "../enums";



// Company document creation
export class CreateCompanyDto {
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
export interface CreateCompanyResponse {
  status: number;
  error: string[];
  id: Types.ObjectId;
}
