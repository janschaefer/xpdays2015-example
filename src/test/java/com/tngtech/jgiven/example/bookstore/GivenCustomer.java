package com.tngtech.jgiven.example.bookstore;

import com.tngtech.jgiven.Stage;
import com.tngtech.jgiven.annotation.AfterStage;
import com.tngtech.jgiven.annotation.ExtendedDescription;
import com.tngtech.jgiven.annotation.ProvidedScenarioState;
import com.tngtech.jgiven.example.bookstore.entity.Customer;
import com.tngtech.jgiven.example.bookstore.entity.CustomerRepository;

public class GivenCustomer<SELF extends GivenCustomer<?>> extends Stage<SELF> {

    @ProvidedScenarioState
    protected CustomerRepository customerRepository = new CustomerRepository();

    @ProvidedScenarioState
    protected Customer customer;

    @ExtendedDescription("A default customer with name 'John Doe'")
    public SELF a_customer() {
        customer = new Customer();
        customer.name = "John Doe";
        return self();
    }

    @AfterStage
    protected void storeCustomer() {
        if (customer != null) {
            customerRepository.store(customer);
        }
    }
}
