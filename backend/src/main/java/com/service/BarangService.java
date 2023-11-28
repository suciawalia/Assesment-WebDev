package com.service;

import com.model.Barang;
import com.repository.BarangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BarangService {

    @Autowired
    private BarangRepository barangRepository;

    public Barang addBarang(Barang barang) {
        return barangRepository.save(barang);
    }

    public List<Barang> getAllBarang() {
        return barangRepository.findAll();
    }

    public Optional<Barang> getBarangById(String kodeBarang) {
        return barangRepository.findById(kodeBarang);
    }
    
    public Barang updateBarang(String kodeBarang, Barang barang) {
        barang.setKodeBarang(kodeBarang);
        return barangRepository.save(barang);
    }

    public void deleteBarang(String kodeBarang) {
        barangRepository.deleteById(kodeBarang);
    }
}
