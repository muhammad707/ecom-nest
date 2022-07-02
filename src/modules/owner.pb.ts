/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'owner';

/** ENUMS */
export enum Status {
  ACTIVE = 0,
  BLOCKED = 1,
  PENDING = 2,
  PAUSED = 3,
  UNRECOGNIZED = -1,
}

export enum HolderType {
  INDIVIDUAL = 0,
  LTD = 1,
  UNRECOGNIZED = -1,
}

export enum OrderType {
  ALL = 0,
  PREORDER = 1,
  END_PRODUCT = 2,
  UNRECOGNIZED = -1,
}

export interface CompanyData {
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
  address: Address | undefined;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
}

/** Address */
export interface Address {
  latitude: string;
  longitude: string;
  name: string;
  street: string;
  city: string;
  home: string;
  postalCode: string;
  apartment: string;
  comment: string;
  domofon: string;
  address: string;
  regionId: number;
  districtId: number;
}

export interface CreateCompanyRequest {
  companyData: CompanyData | undefined;
}

export interface CreateCompanyResponse {
  id: string;
  error: string[];
  status: number;
}

export interface GetCompaniesRequest {
  skip: number;
  limit: number;
}

export interface GetCompaniesResponse {
  status: number;
  count: number;
  error: string[];
  data: CompanyData[];
}

export interface GetCompanyRequest {
  id: string;
}

export interface GetCompanyResponse {
  status: number;
  error: string[];
  data: CompanyData | undefined;
}

export const OWNER_PACKAGE_NAME = 'owner';

/** COMPANY SERVICE */

export interface CompanyServiceClient {
  createCompany(
    request: CreateCompanyRequest,
  ): Observable<CreateCompanyResponse>;

  getCompany(request: GetCompanyRequest): Observable<GetCompanyResponse>;

  getCompanies(request: GetCompaniesRequest): Observable<GetCompaniesResponse>;
}

/** COMPANY SERVICE */

export interface CompanyServiceController {
  createCompany(
    request: CreateCompanyRequest,
  ):
    | Promise<CreateCompanyResponse>
    | Observable<CreateCompanyResponse>
    | CreateCompanyResponse;

  getCompany(
    request: GetCompanyRequest,
  ):
    | Promise<GetCompanyResponse>
    | Observable<GetCompanyResponse>
    | GetCompanyResponse;

  getCompanies(
    request: GetCompaniesRequest,
  ):
    | Promise<GetCompaniesResponse>
    | Observable<GetCompaniesResponse>
    | GetCompaniesResponse;
}

export function CompanyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createCompany',
      'getCompany',
      'getCompanies',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('CompanyService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('CompanyService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const COMPANY_SERVICE_NAME = 'CompanyService';
