package com.tngtech.jgiven.example.bookstore;

import com.tngtech.jgiven.annotation.IsTag;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IsTag(prependType = true, color = "#00942E")
@Retention(RetentionPolicy.RUNTIME)
public @interface Story {
    String value();
}
