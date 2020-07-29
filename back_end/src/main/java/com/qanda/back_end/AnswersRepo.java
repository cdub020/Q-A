package com.qanda.back_end;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AnswersRepo extends CrudRepository<QAtables.Answers, Long> {
    List<QAtables.Answers> findByquestionid(Long questionid);
}
