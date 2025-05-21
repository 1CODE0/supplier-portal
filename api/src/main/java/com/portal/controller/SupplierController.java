
package com.portal.controller;

import com.portal.model.Supplier;
import com.portal.service.SupplierService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class SupplierController {
    private final SupplierService svc;

    public SupplierController(SupplierService svc) {
        this.svc = svc;
    }

    @GetMapping("/suppliers")
    public List<Supplier> listSuppliers() {
        return svc.getAll();
    }

    @GetMapping("/suppliers/{id}")
    public Supplier getSupplierById(@PathVariable UUID id) {
        return svc.getById(id);
    }

    @PostMapping("/suppliers/create")
    public Supplier createSupplier(@RequestBody @Valid Supplier s) {
        return svc.create(s);
    }

    @PutMapping("/suppliers/update/{id}")
    public Supplier updateSupplier(@PathVariable UUID id, @RequestBody @Valid Supplier s) {
        return svc.update(id, s);
    }

    @DeleteMapping("/suppliers/delete/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteSupplier(@PathVariable UUID id) {
        svc.delete(id);
    }
}
