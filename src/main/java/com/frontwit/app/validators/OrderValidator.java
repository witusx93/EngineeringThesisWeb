package com.frontwit.app.validators;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import com.frontwit.app.entities.Order;

/**
 * Created by Patryk on 2016-01-11.
 */
public class OrderValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return Order.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "error.name", "Name is required.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "surname", "error.name", "Name is required.");
    }
}