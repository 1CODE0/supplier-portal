package com.portal.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public RequestMappingHandlerMapping requestMappingHandlerMappingBean() {
        RequestMappingHandlerMapping mapping = new RequestMappingHandlerMapping();
        mapping.setUseTrailingSlashMatch(true); // Ensure full paths are used
        return mapping;
    }
}
