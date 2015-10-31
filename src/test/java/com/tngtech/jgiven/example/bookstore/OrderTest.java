package com.tngtech.jgiven.example.bookstore;

import com.tngtech.java.junit.dataprovider.DataProvider;
import com.tngtech.java.junit.dataprovider.DataProviderRunner;
import com.tngtech.jgiven.annotation.NotImplementedYet;
import com.tngtech.jgiven.example.bookstore.GivenBook.BookOnStock;
import com.tngtech.jgiven.example.bookstore.entity.Book;
import com.tngtech.jgiven.junit.ScenarioTest;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.Arrays;

@FeatureOrder
@RunWith(DataProviderRunner.class)
public class OrderTest extends ScenarioTest<GivenBook<?>, WhenOrder<?>, ThenOrder<?>> {

    @Test
    @Story("1")
    public void customers_can_order_books() {
        given().a_customer()
            .and().a_book_on_stock();

        when().the_customer_orders_the_book();

        then().a_corresponding_order_exists_for_the_customer();
    }

    @Test
    @Story("2")
    @DataProvider({"1, 0", "3, 2", "5, 4"})
    public void the_stock_is_reduced_when_a_book_is_ordered(int initial, int left) {
        given().a_customer()
            .and().a_book()
            .with().$_items_on_stock(initial);

        when().the_customer_orders_the_book();

        then().there_are_$_items_left_on_stock(left);
    }

    @Test
    @Story("2")
    @DataProvider({"1", "3", "5"})
    public void the_stock_is_reduced_when_a_book_is_ordered_derived(int initial) {
        given().a_customer()
            .and().a_book()
            .with().$_items_on_stock(initial);

        when().the_customer_orders_the_book();

        then().there_are_$_items_left_on_stock(initial - 1);
    }

    @Test
    @Story("3")
    public void no_orders_are_created_when_ordering_a_book_that_is_out_of_stock() {
        given().a_customer()
            .and().a_book()
            .with().$_items_on_stock(0);

        when().the_customer_orders_the_book();

        then().no_corresponding_order_exists_for_the_customer()
            .and().there_are_$_items_left_on_stock(0);
    }


    @Test
    @Story("3")
    @DataProvider({"3, 2, true", "0, 0, false"})
    public void the_stock_is_only_reduced_when_possible(int initial, int left, boolean orderIsDone) {
        given().a_customer()
            .and().a_book()
            .with().$_items_on_stock(initial);

        when().the_customer_orders_the_book();

        then().there_are_$_items_left_on_stock(left);

        if (orderIsDone) {
            then().and().a_corresponding_order_exists_for_the_customer();
        } else {
            then().and().no_corresponding_order_exists_for_the_customer();
        }
    }

    @Test
    @Story("2")
    public void ordering_a_book_reduces_the_stock() {
        given().the_following_books_are_on_stock(new String[][]{
            {"id", "name", "author", "stock"},
            {"1", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "5"},
            {"2", "Lord of the Rings", "John Tolkien", "3"},
        });

        when().a_customer_orders_book("1");

        then().the_stock_looks_as_follows(new String[][]{
            {"id", "name", "author", "stock"},
            {"1", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "4"},
            {"2", "Lord of the Rings", "John Tolkien", "3"},
        });
    }

    @Test
    @Story("2")
    public void ordering_a_book_reduces_the_stock_with_POJO() {
        given().the_following_books_are_on_stock(Arrays.asList(
            new BookOnStock("1", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 5),
            new BookOnStock("2", "Lord of the Rings", "John Tolkien", 3)
        ));

        when().a_customer_orders_book("1");

        then().the_stock_looks_as_follows(Arrays.asList(
            new BookOnStock("1", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 4),
            new BookOnStock("2", "Lord of the Rings", "John Tolkien", 3)
        ));
    }

    @Test
    @Story("4")
    public void single_POJOs_as_Table() {
        given().the_following_book(
            new Book()
                .withName("Lord of the Rings")
                .withAuthor("John Tolkien")
                .withPriceInEurCents(30));
    }

    @Test
    @FeatureEmail
    @NotImplementedYet
    @Story("5")
    public void the_customer_gets_an_email_when_ordering_a_book() {
        given().a_customer()
            .and().a_book_on_stock();

        when().the_customer_orders_the_book();

        then().the_customer_gets_an_email();
    }


}
