package com.example.demo.Customer.dto;

import jakarta.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class CreateCustomerDto {

    @NotBlank(message = "First name is required")
    private String username;

    @NotBlank(message = "mail is required")
    private String mail;

}
