package com.repository;

import com.model.Kasir;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface KasirRepository extends JpaRepository<Kasir, String> {
    // Jika diperlukan, Anda dapat menambahkan metode tambahan sesuai kebutuhan bisnis
}
