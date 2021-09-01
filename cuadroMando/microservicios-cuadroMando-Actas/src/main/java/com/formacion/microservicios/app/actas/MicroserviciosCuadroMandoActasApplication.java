package com.formacion.microservicios.app.actas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableEurekaClient
@SpringBootApplication
@EntityScan({"com.formacion.mircorservicios.commons.estados.models.entity",
	"com.formacion.mircorservicios.commons.provincias.models.entity",
	"com.formacion.mircorservicios.commons.usuarios.models.entity",
	"com.formacion.microservicios.app.actas.models.entity"})
public class MicroserviciosCuadroMandoActasApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroserviciosCuadroMandoActasApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
	    return new WebMvcConfigurer() {
	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("*");
	        }
	    }; 
	  }
}