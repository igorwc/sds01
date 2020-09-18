package com.cavalcanti.search.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cavalcanti.search.dto.RecordDTO;
import com.cavalcanti.search.dto.RecordInsertDTO;
import com.cavalcanti.search.entities.Game;
import com.cavalcanti.search.entities.Record;
import com.cavalcanti.search.repositories.GameRepository;
import com.cavalcanti.search.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	@Autowired
	private GameRepository gameRepository;

	@Transactional(readOnly = true)
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		Game game = gameRepository.getOne(dto.getGameId());
		
		entity.setGame(game);
		entity =  repository.save(entity);
		return new RecordDTO(entity);
	}
}
