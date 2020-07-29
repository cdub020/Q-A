package com.qanda.back_end;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class QAtables {

    @Entity
    @Data
    @Table(name = "answers")
    public static class Answers{
        @Id
        @GeneratedValue(strategy=GenerationType.AUTO)
        private Long id;
        private Long questionid;

        @Column(columnDefinition = "text")
        private String answer;
        private String username;

        private int helpful;
        private int nothelpful;

        @JsonFormat(pattern = "MM-dd-yyyy")
        private Date date;
    }

    @Entity
    @Data
    @Table(name = "questions")
    public static class Questions{
        @Id
        @GeneratedValue(strategy=GenerationType.AUTO)
        private Long id;

        private String username;
        @Column(columnDefinition = "text")
        private String question;

        @JsonFormat(pattern = "MM-dd-yyyy")
        private Date questiondate;

        @Embedded
        private Flight flight;

        @Embeddable
        @Data
        public static class Flight{
            private String airline;
            private String flightnumbers;
            private String departingloc;
            private String arrivingloc;
        }
    }
}
