package com.portal.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.portal.dto.OrderInputDto;
import com.portal.exception.BadRequestException;
import com.portal.exception.NotFoundException;
import com.portal.model.Order;
import com.portal.model.Supplier;
import com.portal.repository.OrderRepository;
import com.portal.repository.SupplierRepository;

import jakarta.transaction.Transactional;

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

    @Transactional
    public Order create(OrderInputDto dto) {
        UUID supplierId = Optional.ofNullable(dto.getSupplierId())
                .orElseThrow(() -> new BadRequestException("supplierId is required"));

        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new NotFoundException("Supplier not found: " + supplierId));

        Order order = new Order();
        order.setTotalAmount(dto.getTotalAmount());
        order.setStatus(dto.getStatus());
        order.setDescription(dto.getDescription());
        order.setSupplier(supplier);

        return orderRepository.save(order);
    }

    public Order update(UUID id, OrderInputDto dto) {
        Order existing = getById(id);
        existing.setStatus(dto.getStatus());
        existing.setTotalAmount(dto.getTotalAmount());
        existing.setDescription(dto.getDescription());

        UUID supplierId = Optional.ofNullable(dto.getSupplierId())
                .orElseThrow(() -> new BadRequestException("supplierId is required"));

        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new NotFoundException("Supplier not found: " + supplierId));

        existing.setSupplier(supplier);
        return orderRepository.save(existing);
    }

    public void delete(UUID id) {
        orderRepository.deleteById(id);
    }
}