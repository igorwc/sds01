package com.cavalcanti.search.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cavalcanti.search.entities.Game;

public interface GameRepository extends JpaRepository<Game,Long> {

	 
 
}
