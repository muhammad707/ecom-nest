import { Observable } from "rxjs";
import { GrpcMethod } from '@nestjs/microservices';

export const protobufPackage = 'owner';
export const COMPANY_PACKAGE_NAME = 'company';
export const COMPANY_SERVICE_NAME = 'CompanyService';

export interface CreateCompanyRequest {
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

export enum Status {
  ACTIVE = 1,
  BLOCKED = 2,
  PENDING = 3,
  PAUSED = 4,
}

export enum HolderType {
  INDIVIDUAL = 1,
  LTD = 2,
}

export enum OrderType {
  ALL = 1,
  PREORDER = 2,
  END_PRODUCT = 3,
}

export interface CreateCompanyResponse {
  status: number;
  error: string[];
  id: string;
}

export interface ProductServiceClient {
  createCompany(request: CreateCompanyRequest): Observable<CreateCompanyResponse>;
}