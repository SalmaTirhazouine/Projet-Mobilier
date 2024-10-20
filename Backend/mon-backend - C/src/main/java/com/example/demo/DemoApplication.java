package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(scanBasePackages = {"com.*"})
//@EntityScan(basePackages = {"com.*"})
//@Component
@CrossOrigin("")
public class DemoApplication {
    public static void main(String[] args)  {
        SpringApplication.run(DemoApplication.class, args);
    }

}/*

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication (scanBasePackages = {"com.*"})
@EntityScan (basePackages = {"com.*"})
//@EnableJpaRepositories (basePackages = {"com.*"})
public class DemoApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder(DemoApplication.class)
                .web(WebApplicationType.NONE)
                .run(args);
    }
}*/