package com.tngtech.jgiven.example.bookstore;

import com.google.common.collect.Lists;
import com.tngtech.jgiven.Stage;
import com.tngtech.jgiven.annotation.ExpectedScenarioState;
import com.tngtech.jgiven.annotation.Table;
import com.tngtech.jgiven.example.bookstore.entity.*;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class ThenOrder<SELF extends ThenOrder<?>> extends Stage<SELF> {
    @ExpectedScenarioState
    protected OrderRepository orderRepository;

    @ExpectedScenarioState
    protected StockRepository stockRepository;

    @ExpectedScenarioState
    protected List<Book> books;

    @ExpectedScenarioState
    protected Customer customer;

    public SELF a_corresponding_order_exists_for_the_customer() {
        List<Order> orders = orderRepository.getOrdersOfCustomer(customer);
        assertThat(orders).extracting("book").contains(books.get(books.size() - 1));
        return self();
    }

    public SELF there_are_$_items_left_on_stock(int numberOfItems) {
        StockItem stockItem = stockRepository.getByBook(books.get(books.size() - 1));
        assertThat(stockItem.count).isEqualTo(numberOfItems);
        return self();
    }

    public SELF no_corresponding_order_exists_for_the_customer() {
        List<Order> orders = orderRepository.getOrdersOfCustomer(customer);
        assertThat(orders).extracting("book").doesNotContain(books.get(books.size() - 1));
        return self();
    }

    public void the_customer_gets_an_email() {

    }

    public SELF the_stock_looks_as_follows(@Table List<GivenBook.BookOnStock> stock) {
        List<StockItem> stockItems = stockRepository.getAllItems();
        assertThat(stockItems.size()).isEqualTo(stock.size());

        for (GivenBook.BookOnStock bookOnStock : stock) {
            StockItem item = stockRepository.load(bookOnStock.id);
            assertThat(item).isNotNull();
            assertThat(item.book.name).isEqualTo(bookOnStock.name);
            assertThat(item.book.author).isEqualTo(bookOnStock.author);
            assertThat(item.count).isEqualTo(bookOnStock.count);
        }

        return self();
    }

    public SELF the_stock_looks_as_follows(@Table String[][] stock) {
        List<GivenBook.BookOnStock> bookOnStocks = Lists.newArrayList();

        for (int row = 1; row < stock.length; row++) {
            String[] bookOnStock = stock[row];
            bookOnStocks.add(new GivenBook.BookOnStock(bookOnStock[0], bookOnStock[1], bookOnStock[2], Integer.parseInt(bookOnStock[3])));
        }

        return the_stock_looks_as_follows(bookOnStocks);
    }
}
