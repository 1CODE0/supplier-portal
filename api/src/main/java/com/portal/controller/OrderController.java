package com.portal.controller;

import com.portal.model.Order;
import com.portal.repository.OrderRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    public final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Order create(@RequestBody Order order) {
        return repo.save(order);
    }

    @GetMapping
    public List<Order> list() {
        return repo.findAll();
    }
}
