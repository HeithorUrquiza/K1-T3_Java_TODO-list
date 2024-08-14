package aczg.list.todo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Task {
    private String name;
    private String description;
    private LocalDate ends_date;
    private int priority;
    private String category;
    private Status status;

    public Task(String name, String description, String ends_date, String priority, String category, String status) {
        this.name = name;
        this.description = description;
        this.ends_date = LocalDate.parse(ends_date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        this.priority = Integer.parseInt(priority);
        this.category = category;
        this.status = Status.fromString(status);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getEnds_date() {
        return ends_date;
    }

    public void setEnds_date(LocalDate ends_date) {
        this.ends_date = ends_date;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Task{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", ends_date=" + ends_date +
                ", priority=" + priority +
                ", category='" + category + '\'' +
                ", status=" + status +
                '}';
    }
}

