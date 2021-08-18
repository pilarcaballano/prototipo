package com.formacion.microservicios.app.comunicacioncorreo.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ControllerExceptionHandler {
	  
	  @ExceptionHandler(ExcepcionGenerica.class)
	  public ResponseEntity<ErrorMessage> validationException(ExcepcionGenerica ex, WebRequest request) {
	    ErrorMessage message = new ErrorMessage(
	    	HttpStatus.INTERNAL_SERVER_ERROR.value(),
	        new Date(),
	        ex.getMessage(),
	        request.getDescription(false));
	    
	    return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	  }
}
