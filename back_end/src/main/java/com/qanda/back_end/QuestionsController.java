package com.qanda.back_end;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
public class QuestionsController {
    @Autowired
    private QuestionsRepo repository;

    //GET all Questions
    @GetMapping("")
        @CrossOrigin
    public Iterable<QAtables.Questions> all() {
        return this.repository.findAll();
    }

    //GET question by question id
    @GetMapping("/{questionid}")
    @CrossOrigin
    public Optional<QAtables.Questions> getquestionbyid(@PathVariable Long questionid) {
        return this.repository.findById(questionid);
    }

    //GET questions by username
    @GetMapping("/user/{username}")
    @CrossOrigin
    public List<QAtables.Questions> getbyuser(@PathVariable String username) {
        return this.repository.findByusername(username);
    }

    //POST a question
    @PostMapping("")
    @CrossOrigin
    public QAtables.Questions create(@RequestBody QAtables.Questions question) {
        return this.repository.save(question);
    }



}
