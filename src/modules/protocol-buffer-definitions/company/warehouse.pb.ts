/* eslint-disable */
import { Address } from '../address.pb';

export const protobufPackage = '';

export interface CompanyWarehouse {
  name: string;
  address: Address | undefined;
  status: number;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
}

export const _PACKAGE_NAME = '';
