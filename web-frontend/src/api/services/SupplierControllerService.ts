/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Supplier } from '../models/Supplier';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupplierControllerService {
    /**
     * @param id
     * @returns Supplier OK
     * @throws ApiError
     */
    public static getSupplierById(
        id: string,
    ): CancelablePromise<Supplier> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/suppliers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Supplier OK
     * @throws ApiError
     */
    public static updateSupplier(
        id: string,
        requestBody: Supplier,
    ): CancelablePromise<Supplier> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/suppliers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteSupplier(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/suppliers/{id}',
            path: {
                'id': id,
            },
        });
    }
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
        requestBody: Supplier,
    ): CancelablePromise<Supplier> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/suppliers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
