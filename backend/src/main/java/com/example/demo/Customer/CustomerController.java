package com.example.demo.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Customer.dto.AddPointCustomerDto;
import com.example.demo.Customer.dto.CreateCustomerDto;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping(value = "/customers")
    public Iterable<Customer> getCustomers() {
        return customerService.getAllCustomers();
    }

    // add customer
    @PostMapping(value = "/customers")
    public Customer addCustomer(@RequestBody CreateCustomerDto createCustomerDto) {
        return customerService.addCustomer(createCustomerDto);
    }

    // add points to customer
    @PostMapping(value = "/transactions")
    public Customer addPoints(@RequestBody AddPointCustomerDto addPointCustomerDto) {
        return customerService.addPoints(addPointCustomerDto);
    }

}
