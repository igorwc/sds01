package com.cavalcanti.search.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

	@Transactional()
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

	@Transactional(readOnly = true)
	public List<RecordDTO> findAll() {
		List<Record> list = repository.findAll();
		return list.stream().map(x -> new RecordDTO(x)).collect(Collectors.toList());
	} 
	
	@Transactional(readOnly = true) 
	public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		 
		return repository.findByMoments(  minDate,   maxDate, pageRequest).map(x -> new RecordDTO(x));
	}
}
