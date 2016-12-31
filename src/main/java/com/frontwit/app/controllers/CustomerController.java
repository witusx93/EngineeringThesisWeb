package com.frontwit.app.controllers;

import com.frontwit.app.entities.Customer;
import com.frontwit.app.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Patryk on 16.12.2016.
 */
@Controller
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/customers")
    public ResponseEntity<List<Customer>> getActiveCustomers() {
        List<Customer> customers = customerService.getActiveCustomers();
        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
    }

}