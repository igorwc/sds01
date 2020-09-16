package com.cavalcanti.search.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cavalcanti.search.entities.Record;

public interface RecordRepository extends JpaRepository<Record,Long> {

	 
 
}
