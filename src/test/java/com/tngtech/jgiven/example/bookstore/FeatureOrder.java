package com.tngtech.jgiven.example.bookstore;

import com.tngtech.jgiven.annotation.IsTag;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IsTag(description = "In order to earn money<br>" +
    "as a business<br>" +
    "I want that customers can submit orders",
    type = "Feature", value = "Order", prependType = true, color = "#1B82E3"
)
@Retention(RetentionPolicy.RUNTIME)
public @interface FeatureOrder {
}
