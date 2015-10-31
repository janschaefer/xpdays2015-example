package com.tngtech.jgiven.example.bookstore.entity;

import java.util.ArrayList;
import java.util.List;

public class OrderRepository extends Repository<Order> {

    public List<Order> getOrdersOfCustomer(Customer customer) {
        List<Order> orders = new ArrayList<Order>();
        for (Order order : entities.values()) {
            if (order.customer.getId().equals(customer.getId())) {
                orders.add(order);
            }
        }
        return orders;
    }
}
