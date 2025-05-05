package com.portal.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.portal.model.Supplier;
import com.portal.repository.SupplierRepository;

@Service
public class SupplierService {
    private final SupplierRepository supplierRepository;

    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> getAll() {
        return supplierRepository.findAll();
    }

    public Supplier getById(UUID id) {
        return supplierRepository.findById(id).orElseThrow();
    }

    public Supplier create(Supplier s) {
        return supplierRepository.save(s);
    }

    public Supplier update(UUID id, Supplier s) {
        Supplier existing = getById(id);
        existing.setName(s.getName());
        existing.setContactEmail(s.getContactEmail());
        existing.setPhone(s.getPhone());
        existing.setAddress(s.getAddress());
        return supplierRepository.save(existing);
    }

    public void delete(UUID id) {
        supplierRepository.deleteById(id);
    }
}