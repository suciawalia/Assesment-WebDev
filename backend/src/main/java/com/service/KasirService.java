package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.KasirRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

import java.util.List;

import com.model.Kasir;

@Service
public class KasirService {
	@Autowired
	KasirRepository kasirRepository;
	
	public void addKasir(Kasir kasirRequest) {
		kasirRepository.save(kasirRequest);
	}

	public List<Kasir> getAllKasir(){
		return kasirRepository.findAll();
	}

	public Kasir getKasirByKode(String kode_kasir) {
		return kasirRepository.getById(kode_kasir);
	}

	public void updateKasir(Kasir kasirRequest) {
		kasirRepository.save(kasirRequest);
	}

	public void deleteKasir(String kode_kasir) {
		kasirRepository.deleteById(kode_kasir);
	}

	public void updateKasirByKode(String kode_kasir, Kasir kasirRequest) {
        Kasir existingKasir = kasirRepository.getById(kode_kasir);

        if (existingKasir != null) {
            // Update properties yang diperlukan dari kasirRequest ke existingKasir
            existingKasir.setNama(kasirRequest.getNama());
            // Update properties lain jika ada

            // Simpan perubahan ke repository
            kasirRepository.save(existingKasir);
        }
    }
}
