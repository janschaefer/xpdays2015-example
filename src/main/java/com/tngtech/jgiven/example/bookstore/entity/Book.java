package com.tngtech.jgiven.example.bookstore.entity;

public class Book extends Entity {
    public String name;
    public String isbn;
    public String author;
    public long priceInEurCents;

    public Book withName(String name) {
        this.name = name;
        return this;
    }

    public Book withAuthor(String author) {
        this.author = author;
        return this;
    }

    public Book withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }

    public Book withPriceInEurCents(long priceInEurCents) {
        this.priceInEurCents = priceInEurCents;
        return this;
    }
}
