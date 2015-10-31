package com.tngtech.jgiven.example.bookstore.entity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Repository<T extends Entity> {
    private static int idCounter = 0;

    protected Map<String, T> entities = new HashMap();

    public T load(String id) {
        return entities.get(id);
    }

    public void store(T entity) {
        if (entity.id == null) {
            entity.id = "" + idCounter++;
        }
        entities.put(entity.id, entity);
    }

    public List<T> getAllItems() {
        return new ArrayList<T>(entities.values());
    }

}
