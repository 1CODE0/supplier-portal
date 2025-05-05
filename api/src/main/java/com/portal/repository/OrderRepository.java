package com.portal.repository;

import com.portal.model.Order;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findBySupplierId(UUID supplierId);
}