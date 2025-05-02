/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
import type { OrderDTO } from '../models/OrderDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderControllerService {
    /**
     * @returns Order OK
     * @throws ApiError
     */
    public static listOrders(): CancelablePromise<Array<Order>> {
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
        requestBody: OrderDTO,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
