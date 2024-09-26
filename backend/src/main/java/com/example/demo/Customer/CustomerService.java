package com.example.demo.Customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Customer.dto.AddPointCustomerDto;
import com.example.demo.Customer.dto.CreateCustomerDto;

@Service
public class CustomerService {
    @Autowired
    private CustomerDao customerDao;

    public List<Customer> getAllCustomers() {
        return customerDao.findAll();
    }

    public Customer addCustomer(CreateCustomerDto createCustomerDto) {
        Customer customer = new Customer();
        customer.setUsername(createCustomerDto.getUsername());
        customer.setMail(createCustomerDto.getMail());
        customer.setTotalPoints(0);
        customer.setPointsRedeemed(0);
        return customerDao.save(customer);
    }

    public Customer addPoints(AddPointCustomerDto addPointCustomerDto) {
        Customer customer = customerDao.findById(addPointCustomerDto.getId()).get();
        customer.setTotalPoints(customer.getTotalPoints() + addPointCustomerDto.getPoints());
        return customerDao.save(customer);
    }
}
