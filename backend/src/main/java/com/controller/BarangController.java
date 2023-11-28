package com.controller;

import com.model.Barang;
import com.service.BarangService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/barang")
@CrossOrigin(origins = "http://localhost:3000")
public class BarangController {

    @Autowired
	BarangService barangService;

    // Create
    @PostMapping("/insert")
    public Barang addBarang(@RequestBody Barang barang) {
        return barangService.addBarang(barang);
    }

    // Read
    @GetMapping("/")
    public List<Barang> getAllBarang() {
        return barangService.getAllBarang();
    }

    @GetMapping("/{kodeBarang}")
    public Optional<Barang> getBarangById(@PathVariable String kodeBarang) {
        return barangService.getBarangById(kodeBarang);
    }

    // Update
    @PutMapping("/update/{kodeBarang}")
    public Barang updateBarang(@PathVariable String kodeBarang, @RequestBody Barang barang) {
        barang.setKodeBarang(kodeBarang);
        return barangService.updateBarang(kodeBarang, barang);
    }

    // Delete
    @DeleteMapping("/delete/{kodeBarang}")
    public void deleteBarang(@PathVariable String kodeBarang) {
        barangService.deleteBarang(kodeBarang);
    }
}
