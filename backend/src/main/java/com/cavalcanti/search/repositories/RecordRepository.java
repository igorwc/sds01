package com.cavalcanti.search.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cavalcanti.search.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record,Long> {

	@Query("SELECT obj from Record obj WHERE "
			+ "(coalesce(:min,null) IS NULL or obj.moment>= :min ) AND "
			+ "(coalesce(:max,null) IS NULL or  obj.moment<= :max)")
	Page<Record> findByMoments(Instant min, Instant max, Pageable pageable);

	 
 
}
