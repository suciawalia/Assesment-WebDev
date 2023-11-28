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

import com.service.KasirService;
import com.model.Kasir;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class KasirController {
	@Autowired
	KasirService kasirService;
	
	@PostMapping("/kasir/insert")
	public ResponseEntity<String> addKasir(@RequestBody Kasir kasirRequest){
        String nama = kasirRequest.getNama();
        kasirService.addKasir(kasirRequest);
		return ResponseEntity.ok("Kasir dengan nama " +nama+ " berhasil ditambahkan");
	}
}
