package com.portal.controller;

import com.portal.dto.OrderInputDto;
import com.portal.model.Order;
import com.portal.service.OrderService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders")
    public List<Order> list() {
        return orderService.getAll();
    }

    @GetMapping("/orders/supplier/{supplierId}")
    public List<Order> listBySupplier(@PathVariable UUID supplierId) {
        return orderService.getBySupplier(supplierId);
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable UUID id) {
        return orderService.getById(id);
    }

    // @PostMapping
    // public Order createOrder(@RequestBody @Valid Order o) {
    // return orderService.create(o);
    // }

    @PostMapping("/orders/create")
    public ResponseEntity<Order> createOrder(@RequestBody OrderInputDto dto) {
        Order created = orderService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/orders/update/{id}")
    public Order updateOrder(@PathVariable UUID id, @RequestBody @Valid OrderInputDto dto) {
        return orderService.update(id, dto);
    }

    @DeleteMapping("/orders/delete/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable UUID id) {
        orderService.delete(id);
    }
}