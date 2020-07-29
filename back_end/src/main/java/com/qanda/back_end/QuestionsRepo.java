package com.qanda.back_end;

import org.springframework.data.repository.CrudRepository;

public interface QuestionsRepo extends CrudRepository<QAtables.Questions, Long> {
}
