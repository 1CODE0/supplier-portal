package com.portal.controller;

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
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService svc;

    public OrderController(OrderService svc) {
        this.svc = svc;
    }

    @GetMapping
    public List<Order> list() {
        return svc.getAll();
    }

    @GetMapping("/supplier/{supplierId}")
    public List<Order> listBySupplier(@PathVariable UUID supplierId) {
        return svc.getBySupplier(supplierId);
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable UUID id) {
        return svc.getById(id);
    }

    // @PostMapping
    // public Order createOrder(@RequestBody @Valid Order o) {
    // return svc.create(o);
    // }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order o) {
        Order created = svc.create(o);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable UUID id, @RequestBody @Valid Order o) {
        return svc.update(id, o);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable UUID id) {
        svc.delete(id);
    }
}