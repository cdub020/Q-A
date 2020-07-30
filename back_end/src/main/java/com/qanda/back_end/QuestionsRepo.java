package com.qanda.back_end;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionsRepo extends CrudRepository<QAtables.Questions, Long> {
    List<QAtables.Questions> findByusername(String username);
}
