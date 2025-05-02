package com.portal.controller;

import com.portal.model.Order;
import com.portal.service.OrderService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    public final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return service.createOrderService(order);
    }

    @GetMapping
    public List<Order> listOrders() {
        return service.listOrderService();
    }
}
