package com.repository;

import com.model.Tenan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenanRepository extends JpaRepository<Tenan, String> {
    // You can add custom queries or methods if needed
}
