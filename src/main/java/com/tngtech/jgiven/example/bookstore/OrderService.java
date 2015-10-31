package com.tngtech.jgiven.example.bookstore;

import com.tngtech.jgiven.example.bookstore.entity.*;

public class OrderService {
    private StockRepository stockRepository;
    private OrderRepository orderRepository;

    public OrderService(StockRepository stockRepository, OrderRepository orderRepository) {
        this.stockRepository = stockRepository;
        this.orderRepository = orderRepository;
    }

    public Order orderBook(Customer customer, Book book) {
        StockItem stockItem = stockRepository.getByBook(book);
        if (stockItem.count > 0) {
            Order order = new Order();
            order.customer = customer;
            order.book = book;
            stockItem.count--;
            orderRepository.store(order);
            return order;
        }
        return null;
    }
}
