/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Supplier } from '../models/Supplier';
import type { SupplierDTO } from '../models/SupplierDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupplierControllerService {
    /**
     * @returns Supplier OK
     * @throws ApiError
     */
    public static listSuppliers(): CancelablePromise<Array<Supplier>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/suppliers',
        });
    }
    /**
     * @param requestBody
     * @returns Supplier OK
     * @throws ApiError
     */
    public static createSupplier(
        requestBody: SupplierDTO,
    ): CancelablePromise<Supplier> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/suppliers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
