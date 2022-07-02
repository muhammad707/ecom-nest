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

export interface UpdateCompanyRequest {
  filter: UpdateCompanyRequestFilter | undefined;
  fields: UpdateCompanyRequest_UpdateCompanyRequestFields | undefined;
}

export interface UpdateCompanyRequest_UpdateCompanyRequestFields {
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

export interface UpdateCompanyRequestFilter {
  id: string;
}

export interface UpdateCompanyRequestFields {
  fields: CompanyData | undefined;
}

export interface UpdateCompanyResponse {
  status: number;
  error: string[];
}

export interface DeleteCompanyRequest {
  id: string;
}

export interface DeleteCompanyResponse {
  status: boolean;
}

export const OWNER_PACKAGE_NAME = 'owner';

/** COMPANY SERVICE */

export interface OwnerServiceClient {
  getCompany(request: GetCompanyRequest): Observable<GetCompanyResponse>;

  getCompanies(request: GetCompaniesRequest): Observable<GetCompaniesResponse>;

  createCompany(
    request: CreateCompanyRequest,
  ): Observable<CreateCompanyResponse>;

  updateCompany(
    request: UpdateCompanyRequest,
  ): Observable<UpdateCompanyResponse>;

  deleteCompany(
    request: DeleteCompanyRequest,
  ): Observable<DeleteCompanyResponse>;
}

/** COMPANY SERVICE */

export interface OwnerServiceController {
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

  createCompany(
    request: CreateCompanyRequest,
  ):
    | Promise<CreateCompanyResponse>
    | Observable<CreateCompanyResponse>
    | CreateCompanyResponse;

  updateCompany(
    request: UpdateCompanyRequest,
  ):
    | Promise<UpdateCompanyResponse>
    | Observable<UpdateCompanyResponse>
    | UpdateCompanyResponse;

  deleteCompany(
    request: DeleteCompanyRequest,
  ):
    | Promise<DeleteCompanyResponse>
    | Observable<DeleteCompanyResponse>
    | DeleteCompanyResponse;
}

export function OwnerServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getCompany',
      'getCompanies',
      'createCompany',
      'updateCompany',
      'deleteCompany',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('OwnerService', method)(
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
      GrpcStreamMethod('OwnerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const OWNER_SERVICE_NAME = 'OwnerService';
