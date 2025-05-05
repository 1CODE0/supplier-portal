// src/main/java/com/portal/model/Supplier.java
package com.portal.model;

import jakarta.persistence.*;

import java.util.UUID;

import com.portal.audit.Auditable;

@Entity
@Table(name = "suppliers")
public class Supplier extends Auditable {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String contactEmail;

    private String phone;

    private String address;

    // @PrePersist
    // protected void onCreate() {
    // Instant now = Instant.now();
    // this.createdAt = now;
    // this.updatedAt = now;
    // }

    // @PreUpdate
    // protected void onUpdate() {
    // this.updatedAt = Instant.now();
    // }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}