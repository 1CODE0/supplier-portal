package com.portal.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.portal.model.Supplier;
import com.portal.repository.SupplierRepository;

@Service
public class SupplierService {
    public final SupplierRepository repo;

    public SupplierService(SupplierRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Supplier createSupplierService(@RequestBody Supplier supplier) {
        return repo.save(supplier);
    }

    @GetMapping
    public List<Supplier> listSupplierService() {
        return repo.findAll();
    }
}
