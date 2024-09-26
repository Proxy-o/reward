package com.example.demo.Customer.dto;

import org.springframework.format.annotation.NumberFormat;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AddPointCustomerDto {

    private Long id;
    @NotBlank(message = "Points is required")
    @NumberFormat
    private int points;
}
