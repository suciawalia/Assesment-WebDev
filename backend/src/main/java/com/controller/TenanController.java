package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.service.TenanService;
import com.model.Tenan;

@RestController
@RequestMapping("/tenan")
@CrossOrigin(origins = "http://localhost:3000")
public class TenanController {

    @Autowired
    private TenanService tenanService;

    @PostMapping("/insert")
    public Tenan addTenan(@RequestBody Tenan tenan) {
        return tenanService.addTenan(tenan);
    }

    @GetMapping("/")
    public List<Tenan> getAllTenan() {
        return tenanService.getAllTenan();
    }

    @GetMapping("/{kodeTenan}")
    public Optional<Tenan> getTenanById(@PathVariable String kodeTenan) {
        return tenanService.getTenanById(kodeTenan);
    }

    // Update
    @PutMapping("/update/{kodeTenan}")
    public Tenan updateTenan(@PathVariable String kodeTenan, @RequestBody Tenan tenan) {
        return tenanService.updateTenan(kodeTenan, tenan);
    }

    // Delete
    @DeleteMapping("/delete/{kodeTenan}")
    public void deleteTenan(@PathVariable String kodeTenan) {
        tenanService.deleteTenan(kodeTenan);
    }
}