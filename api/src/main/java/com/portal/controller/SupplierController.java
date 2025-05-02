
package com.portal.controller;

import com.portal.model.Supplier;
import com.portal.service.SupplierService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {
    public final SupplierService service;

    public SupplierController(SupplierService service) {
        this.service = service;
    }

    @PostMapping
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return service.createSupplierService(supplier);
    }

    @GetMapping
    public List<Supplier> listSuppliers() {
        return service.listSupplierService();
    }
}
