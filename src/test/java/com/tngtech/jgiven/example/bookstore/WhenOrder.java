package com.tngtech.jgiven.example.bookstore;

import java.util.List;

import com.tngtech.jgiven.Stage;
import com.tngtech.jgiven.annotation.BeforeStage;
import com.tngtech.jgiven.annotation.ExpectedScenarioState;
import com.tngtech.jgiven.annotation.Pending;
import com.tngtech.jgiven.annotation.ProvidedScenarioState;
import com.tngtech.jgiven.example.bookstore.entity.*;

public class WhenOrder<SELF extends WhenOrder<?>> extends Stage<SELF> {

    @ExpectedScenarioState
    protected OrderRepository orderRepository;

    @ExpectedScenarioState
    protected StockRepository stockRepository;

    @ProvidedScenarioState
    protected OrderService orderService;

    @ExpectedScenarioState
    protected List<Book> books;

    @ExpectedScenarioState
    protected List<StockItem> stockItems;

    @ExpectedScenarioState
    protected Customer customer;

    @ProvidedScenarioState
    private Order order;

    @BeforeStage
    protected void setup() {
        orderService = new OrderService( stockRepository, orderRepository );
    }

    public SELF the_customer_orders_the_book() {
        order = orderService.orderBook( customer, books.get( books.size() - 1 ) );
        return self();
    }

    public SELF a_customer_orders_book( String id ) {
        customer = new Customer();
        Book book = null;
        for( StockItem stockItem : stockItems ) {
            if( stockItem.getId().equals( id ) ) {
                book = stockItem.book;
                break;
            }
        }

        orderService.orderBook( customer, book );
        return self();
    }

    @Pending
    public void der_Auftrag_abgefragt_wird() {

    }
}
