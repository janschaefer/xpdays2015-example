package com.tngtech.jgiven.example.bookstore;

import static com.tngtech.jgiven.annotation.Table.HeaderType.VERTICAL;

import java.util.ArrayList;
import java.util.List;

import com.tngtech.jgiven.annotation.AfterStage;
import com.tngtech.jgiven.annotation.ExtendedDescription;
import com.tngtech.jgiven.annotation.ProvidedScenarioState;
import com.tngtech.jgiven.annotation.Table;
import com.tngtech.jgiven.example.bookstore.entity.*;

public class GivenBook<SELF extends GivenBook<?>> extends GivenCustomer<SELF> {

    @ProvidedScenarioState
    protected OrderRepository orderRepository = new OrderRepository();

    @ProvidedScenarioState
    protected StockRepository stockRepository = new StockRepository();

    @ProvidedScenarioState
    protected BookRepository bookRepository = new BookRepository();

    @ProvidedScenarioState
    protected List<Book> books = new ArrayList<Book>();

    @ProvidedScenarioState
    protected List<StockItem> stockItems = new ArrayList<StockItem>();

    @ExtendedDescription( "The Hitchhiker's Guide to the Galaxy, by default the book is not on stock" )
    public SELF a_book() {
        Book book = new Book();
        book.isbn = "0345391802";
        book.author = "Douglas Adams";
        book.name = "The Hitchhiker's Guide to the Galaxy";
        book.priceInEurCents = 1020;
        books.add( book );
        return self();
    }

    @ExtendedDescription( "The Hitchhiker's Guide to the Galaxy with 10 items on stock\n" )
    public SELF a_book_on_stock() {
        a_book();
        return the_book_is_on_stock();
    }

    @ExtendedDescription( "10 items of the book are on stock" )
    private SELF the_book_is_on_stock() {
        return $_items_on_stock( 10 );
    }

    public SELF $_items_on_stock( int numberOfItems ) {
        StockItem stockItem = new StockItem();
        stockItem.book = books.get( books.size() - 1 );
        stockItem.count = numberOfItems;
        stockItems.add( stockItem );
        return self();
    }

    @AfterStage
    public void storeBook() {
        for( Book book : books ) {
            bookRepository.store( book );
        }

        for( StockItem stockItem : stockItems ) {
            stockRepository.store( stockItem );
        }
    }

    public SELF the_following_book( @Table( includeFields = { "name", "author", "priceInEurCents" }, header = VERTICAL ) Book book ) {
        books.add( book );
        return self();
    }

    public static class BookOnStock {
        public String id;
        public String name;
        public String author;
        public int count;

        public BookOnStock( String id, String name, String author, int count ) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.count = count;
        }
    }

    public SELF the_following_books_are_on_stock( @Table List<BookOnStock> books ) {
        for( BookOnStock bookOnStock : books ) {
            putOnStock( bookOnStock );
        }
        return self();
    }

    public SELF the_following_books_are_on_stock( @Table String[][] books ) {
        for( int row = 1; row < books.length; row++ ) {
            String[] bookOnStock = books[row];
            putOnStock( new BookOnStock( bookOnStock[0], bookOnStock[1], bookOnStock[2], Integer.parseInt( books[row][3] ) ) );
        }
        return self();
    }

    private void putOnStock( BookOnStock bookOnStock ) {
        Book book = new Book();
        book.name = bookOnStock.name;
        book.author = bookOnStock.author;
        this.books.add( book );

        StockItem stockItem = new StockItem();
        stockItem.setId( bookOnStock.id );
        stockItem.book = book;
        stockItem.count = bookOnStock.count;
        this.stockItems.add( stockItem );
    }

}
