package com.portal.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.portal.model.Order;
import com.portal.model.Supplier;
import com.portal.repository.OrderRepository;
import com.portal.repository.SupplierRepository;

@Service
public class OrderService {
    public final OrderRepository orderRepo;
    public final SupplierRepository supplierRepo;

    public OrderService(OrderRepository orderRepo, SupplierRepository supplierRepo) {
        this.orderRepo = orderRepo;
        this.supplierRepo = supplierRepo;
    }

    @PostMapping
    public Order createOrderService(@RequestBody Order order) {
        return orderRepo.save(order);
    }

    @GetMapping
    public List<Order> listOrderService() {
        return orderRepo.findAll();
    }
}
