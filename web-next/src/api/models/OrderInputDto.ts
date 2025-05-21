/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderInputDto = {
    totalAmount: number;
    supplierId: string;
    status: OrderInputDto.status;
    description: string;
};
export namespace OrderInputDto {
    export enum status {
        PENDING = 'PENDING',
        CONFIRMED = 'CONFIRMED',
        SHIPPED = 'SHIPPED',
        DELIVERED = 'DELIVERED',
        CANCELLED = 'CANCELLED',
    }
}

