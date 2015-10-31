package com.tngtech.jgiven.example.bookstore;

import com.tngtech.jgiven.annotation.IsTag;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IsTag(description = "In order to be better informed<br>" +
    "as a customer<br>" +
    "I want to get emails",
    type = "Feature", value = "Email", prependType = true, color = "#1B82E3"
)
@Retention(RetentionPolicy.RUNTIME)
public @interface FeatureEmail {
}
