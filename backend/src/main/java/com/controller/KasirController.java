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

	@PostMapping("/kasir/update")
	public ResponseEntity<String> updateKasir(@RequestBody Kasir kasirRequest){
		String nama = kasirService.getKasirByKode(kasirRequest.getKode_kasir()).getNama();
		kasirService.updateKasir(kasirRequest);
		return ResponseEntity.ok("Kasir dengan nama " + nama + " berhasil diupdate");
	}

	@PutMapping("/kasir/update/{kode_kasir}")
    public ResponseEntity<String> updateKasirByKode(@PathVariable String kode_kasir, @RequestBody Kasir kasirRequest) {
        String nama = kasirService.getKasirByKode(kode_kasir).getNama();
        kasirService.updateKasirByKode(kode_kasir, kasirRequest);
        return ResponseEntity.ok("Kasir dengan kode " + kode_kasir + " dan nama " + nama + " berhasil diupdate");
    }

	@GetMapping("/kasir")
	public List<Kasir> getAllKasir(){
		return kasirService.getAllKasir();
	}

	@GetMapping("/kasir/{kode_kasir}")
    public ResponseEntity<Kasir> getKasirByKode(@PathVariable String kode_kasir) {
        Kasir kasir = kasirService.getKasirByKode(kode_kasir);
        if (kasir != null) {
            return ResponseEntity.ok(kasir);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
