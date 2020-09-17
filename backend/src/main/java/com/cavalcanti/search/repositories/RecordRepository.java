package com.cavalcanti.search.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cavalcanti.search.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record,Long> {

	 
 
}
