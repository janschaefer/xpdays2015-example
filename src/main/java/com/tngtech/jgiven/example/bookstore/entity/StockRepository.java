package com.tngtech.jgiven.example.bookstore.entity;

public class StockRepository extends Repository<StockItem> {
    public StockItem getByBook(Book book) {
        for (StockItem stockItem : entities.values()) {
            if (stockItem.book.getId().equals(book.getId())) {
                return stockItem;
            }
        }
        return null;
    }

}
