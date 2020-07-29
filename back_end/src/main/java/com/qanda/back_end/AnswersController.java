package com.qanda.back_end;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/answers")
public class AnswersController {
    @Autowired
    private AnswersRepo repository;

    @Autowired QuestionsRepo questionsrepository;

    //GET all Answers
    @GetMapping("")
    @CrossOrigin
    public Iterable<QAtables.Answers> all() {
        return this.repository.findAll();
    }

    //GET answer by questionid
    @GetMapping("/answer/{answerid}")
    @CrossOrigin
    public List<QAtables.Answers> getbyid(@PathVariable Long answerid) {
        return this.repository.findByquestionid(answerid);
    }

    //POST a answer
    @PostMapping("/{questionid}")
    @CrossOrigin
    public QAtables.Answers create(@PathVariable Long questionid, @RequestBody QAtables.Answers answer) {
        answer.setQuestionid(questionid);
        return this.repository.save(answer);
    }

    @PostMapping("/helpful/{answerid}")
    @CrossOrigin
    public void addhelp(@PathVariable Long answerid){
        Optional<QAtables.Answers> answeradd = this.repository.findById(answerid);
        answeradd.get().setHelpful(answeradd.get().getHelpful() + 1);
        this.repository.save(answeradd.get());
    }

    @PostMapping("/nothelpful/{answerid}")
    @CrossOrigin
    public void delhelp(@PathVariable Long answerid){
        Optional<QAtables.Answers> answerdel = this.repository.findById(answerid);
        answerdel.get().setNothelpful(answerdel.get().getNothelpful() + 1);
        this.repository.save(answerdel.get());
    }

    @DeleteMapping("/delete/{answerid}")
    @CrossOrigin
    public void delanswer(@PathVariable Long answerid){
        this.repository.deleteById(answerid);
    }
}
