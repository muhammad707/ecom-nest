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

export interface Company {
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

export interface CreateCompanyResponse {
  id: string;
  error: string[];
  status: number;
}

export const OWNER_PACKAGE_NAME = 'owner';

/** COMPANY SERVICE */

export interface CompanyServiceClient {
  createCompany(request: Company): Observable<CreateCompanyResponse>;
}

/** COMPANY SERVICE */

export interface CompanyServiceController {
  createCompany(
    request: Company,
  ):
    | Promise<CreateCompanyResponse>
    | Observable<CreateCompanyResponse>
    | CreateCompanyResponse;
}

export function CompanyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createCompany'];
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
