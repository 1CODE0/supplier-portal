/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderControllerService {
    /**
     * @param id
     * @returns Order OK
     * @throws ApiError
     */
    public static getOrderById(
        id: string,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Order OK
     * @throws ApiError
     */
    public static updateOrder(
        id: string,
        requestBody: Order,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/orders/{id}',
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
    public static deleteOrder(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns Order OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<Order>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders',
        });
    }
    /**
     * @param requestBody
     * @returns Order OK
     * @throws ApiError
     */
    public static createOrder(
        requestBody: Order,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param supplierId
     * @returns Order OK
     * @throws ApiError
     */
    public static listBySupplier(
        supplierId: string,
    ): CancelablePromise<Array<Order>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/supplier/{supplierId}',
            path: {
                'supplierId': supplierId,
            },
        });
    }
}
