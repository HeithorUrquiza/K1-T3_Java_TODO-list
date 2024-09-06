package aczg.list.todo.domain;

import aczg.list.todo.Status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class TodoList {
    private List<Task> taskList;
    private static TodoList instance;

    private TodoList() {
        this.taskList = new ArrayList<>();
    }

    public static TodoList getInstance() {
        if (instance == null) {
            instance = new TodoList();
        }
        return instance;
    }

    public void addTask(Task task) {
        for (Task taskSaved: this.taskList) {
            if (taskSaved.getName().equalsIgnoreCase(task.getName())) {
                throw new RuntimeException("Tarefa já cadastrada");
            }
        }

        if (task.getEndsDate().isBefore(LocalDate.now())) {
            throw new RuntimeException("Data de encerramento inválida");
        }
        this.taskList.add(task);
        this.taskList.sort(Comparator.comparing(Task::getPriority).reversed());
    }

    public List<Task> getTaskList() {
        return this.taskList;
    }

    public Task getTaskByName(String name) {
        for (Task task: this.taskList) {
            if (task.getName().equalsIgnoreCase(name)) {
                return task;
            }
        }
        throw new RuntimeException("Tarefa não encontrada");
    }

    public void updateTask(String name, Task task) {
        var taskFound = this.getTaskByName(name);

        Optional.ofNullable(task.getName()).ifPresent(taskFound::setName);
        Optional.ofNullable(task.getDescription()).ifPresent(taskFound::setDescription);
        Optional.ofNullable(task.getCategory()).ifPresent(taskFound::setCategory);
        Optional.ofNullable(task.getPriority()).ifPresent(taskFound::setPriority);
        Optional.ofNullable(task.getEndsDate()).ifPresent(taskFound::setEndsDate);
        Optional.ofNullable(task.getStatus()).ifPresent(taskFound::setStatus);
    }

    public void deleteTask(Task task) {
        this.taskList.remove(task);
    }

    public List<Task> filterByCategory(String category) {
        return this.taskList.stream()
                .filter(task -> task.getCategory().equalsIgnoreCase(category))
                .toList();
    }

    public List<Task> filterByPriority(int priority) {
        return this.taskList.stream()
                .filter(task -> task.getPriority() == priority)
                .toList();
    }

    public List<Task> filterByStatus(String status) {
        return this.taskList.stream()
                .filter(task -> task.getStatus() == Status.fromString(status))
                .toList();
    }

    public List<Task> filterByEndsDate(LocalDate endsDate) {
        return this.taskList.stream()
                .filter(task -> task.getEndsDate().isAfter(endsDate))
                .toList();
    }
}