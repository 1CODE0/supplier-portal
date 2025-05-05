package com.portal.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.portal.enums.OrderStatus;
import com.portal.exception.BadRequestException;
import com.portal.exception.NotFoundException;
import com.portal.model.Order;
import com.portal.model.Supplier;
import com.portal.repository.OrderRepository;
import com.portal.repository.SupplierRepository;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final SupplierRepository supplierRepository;

    public OrderService(OrderRepository orderRepository, SupplierRepository supplierRepository) {
        this.orderRepository = orderRepository;
        this.supplierRepository = supplierRepository;
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order getById(UUID id) {
        return orderRepository.findById(id).orElseThrow();
    }

    public List<Order> getBySupplier(UUID supplierId) {
        return orderRepository.findBySupplierId(supplierId);
    }

    public Order create(Order o) {
        UUID supplierId = Optional.ofNullable(o.getSupplier())
                .map(Supplier::getId)
                .orElseThrow(() -> new BadRequestException("Supplier ID is required"));

        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new NotFoundException("Supplier not found: " + supplierId));

        o.setSupplier(supplier);
        o.setOrderDate(LocalDateTime.now());
        o.setStatus(o.getStatus());

        return orderRepository.save(o);
    }

    public Order update(UUID id, Order o) {
        Order existing = getById(id);
        existing.setStatus(o.getStatus());
        existing.setTotalAmount(o.getTotalAmount());
        existing.setDescription(o.getDescription());

        UUID supplierId = o.getSupplier().getId();

        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new NotFoundException("Supplier not found: " + supplierId));

        existing.setSupplier(supplier);
        return orderRepository.save(existing);
    }

    public void delete(UUID id) {
        orderRepository.deleteById(id);
    }
}