/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Supplier } from './Supplier';
export type Order = {
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    orderDate?: string;
    status?: Order.status;
    totalAmount?: number;
    supplier?: Supplier;
    description?: string;
};
export namespace Order {
    export enum status {
        PENDING = 'PENDING',
        SUCCESSFUL = 'SUCCESSFUL',
        DELIVERED = 'DELIVERED',
        CANCELED = 'CANCELED',
    }
}

