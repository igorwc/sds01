package com.cavalcanti.search.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cavalcanti.search.dto.RecordDTO;
import com.cavalcanti.search.dto.RecordInsertDTO;
import com.cavalcanti.search.services.RecordService;

@RestController
@RequestMapping(value="/records")
public class RecordController {
 
	@Autowired
	private RecordService service;
	
	 
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto){
		RecordDTO newDTO = service.insert(dto); 
		return ResponseEntity.ok().body(newDTO);
	}

}
