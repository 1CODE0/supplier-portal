package com.portal.dto;

import java.math.BigDecimal;
import java.util.UUID;

import com.portal.enums.OrderStatus;

import jakarta.validation.constraints.NotNull;

public class OrderInputDto {
    @NotNull(message = "totalAmount is required")
    private BigDecimal totalAmount;

    @NotNull(message = "supplierId is required")
    private UUID supplierId;

    @NotNull(message = "status cannot be null")
    private OrderStatus status;

    @NotNull(message = "description cannot be null")
    private String description;

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public UUID getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(UUID supplierId) {
        this.supplierId = supplierId;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
