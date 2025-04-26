package com.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.portal.model")
@EnableJpaRepositories(basePackages = "com.portal.repository")
@ComponentScan("com.portal")
public class SupplierPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(SupplierPortalApplication.class, args);
    }
}
