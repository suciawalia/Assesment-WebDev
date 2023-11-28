package com.service;

import com.model.Tenan;
import com.repository.TenanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TenanService {

    @Autowired
    private TenanRepository tenanRepository;

    public List<Tenan> getAllTenan() {
        return tenanRepository.findAll();
    }

    public Optional<Tenan> getTenanById(String kodeTenan) {
        return tenanRepository.findById(kodeTenan);
    }

    public Tenan addTenan(Tenan tenan) {
        return tenanRepository.save(tenan);
    }

    public Tenan updateTenan(String kodeTenan, Tenan tenan) {
        tenan.setKodeTenan(kodeTenan);
        return tenanRepository.save(tenan);
    }

    public void deleteTenan(String kodeTenan) {
        tenanRepository.deleteById(kodeTenan);
    }
}
