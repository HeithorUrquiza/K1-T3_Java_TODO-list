package aczg.list.todo;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

public class CommandLine {
    private TodoList todoList;
    private Scanner scanner = new Scanner(System.in);

    public CommandLine() {
        this.todoList = TodoList.getInstance();
    }

    public void showMenu() {
        boolean exit = false;
        Scanner sc = new Scanner(System.in);
        while (!exit) {
            System.out.print("""
                1. Cadastrar tarefa
                2. Listar tarefas
                3. Pesquisar tarefa
                4. Excluir tarefa
                5. Atualizar tarefa
                6. Filtrar tarefa por categoria
                7. Filtrar tarefa por prioridade
                8. Filtrar tarefa por status
                9. Filtrar tarefa por data de encerramento
                
                0. Sair
                -> 
                """);

            int choice = this.scanner.nextInt();
            this.scanner.nextLine();
            switch (choice) {
                case 1:
                    this.registerTask();
                    break;
                case 2:
                    this.showAllTasks();
                    break;
                case 3:
                    this.searchTask();
                    break;
                case 4:
                    this.deleteTask();
                    break;
                case 5:
                    this.updateTask();
                    break;
                case 6:
                    this.filterByCategory();
                    break;
                case 7:
                    this.filterByPrioriry();
                    break;
                case 8:
                    this.filterByStatus();
                    break;
                case 9:
                    this.filterByDate();
                    break;
                case 0:
                    System.out.println("\nSaindo...");
                    exit = true;
                    break;
                default:
                    System.out.println("\nOpção inválida. Confira o menu\n\n");
                    break;
            }
        }
    }

    private void filterByDate() {
        System.out.print("\n\nInforme a data [yyyy-MM-dd]: ");
        String date = this.scanner.nextLine();
        List<Task> tasksFiltered = this.todoList.filterByEndsDate(LocalDate.parse(date));
        tasksFiltered.forEach(System.out::println);
        System.out.println("\n\n");
    }

    private void filterByStatus() {
        System.out.print("\n\nInforme o status: ");
        String status = scanner.nextLine();
        List<Task> tasksFiltered = this.todoList.filterByStatus(status);
        tasksFiltered.forEach(System.out::println);
        System.out.println("\n\n");
    }

    private void filterByPrioriry() {
        System.out.print("\n\nPrioridade: ");
        int priority = this.scanner.nextInt();
        this.scanner.nextLine();
        List<Task> tasksFiltered = this.todoList.filterByPriority(priority);
        tasksFiltered.forEach(System.out::println);
        System.out.println("\n\n");
    }

    private void filterByCategory() {
        System.out.print("\n\nInforme a categoria: ");
        String category = scanner.nextLine();
        List<Task> taskFiltered = this.todoList.filterByCategory(category);
        taskFiltered.forEach(System.out::println);
        System.out.println("\n\n");
    }

    private void updateTask() {
        System.out.print("\n\nInsira a tarefa que deseja atualizar: ");
        String name = this.scanner.nextLine();
        System.out.print("Insira os dados para atualizar a tarefa: " +
                "[nome; descricao; encerramento; prioridade; categoria; status] \n-> ");
        String[] taskRaw = this.scanner.nextLine().split(";");
        try {
            this.todoList.updateTask(name, new Task(
                    taskRaw[0].trim(),
                    taskRaw[1].trim(),
                    taskRaw[2].trim(),
                    taskRaw[3].trim(),
                    taskRaw[4].trim(),
                    taskRaw[5].trim()
            ));
            System.out.println("Tarefa atualizada\n\n");
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage() + "\n\n");
        }
    }

    private void deleteTask() {
        System.out.print("\n\nInforme a tarefa que deseja excluir: ");
        String name = this.scanner.nextLine().trim();
        try {
            Task taskToDelete = this.todoList.getTaskByName(name);
            this.todoList.deleteTask(taskToDelete);
            System.out.println("Tarefa deletada com sucesso!\n\n");
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage() + "\n\n");
        }
    }

    private void searchTask() {
        System.out.print("\n\nInsira o nome da tarefa que deseja buscar: ");
        String nome = this.scanner.nextLine().trim();
        try {
            Task taskFound = this.todoList.getTaskByName(nome);
            System.out.println(taskFound + "\n\n");
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage() + "\n\n");
        }
    }

    private void registerTask() {
        System.out.print("\n\nInsira os dados para cadastrar uma tarefa: " +
                "[nome; descricao; encerramento; prioridade; categoria; status] \n-> ");
        String[] taskRaw = this.scanner.nextLine().split(";");
        try {
            this.todoList.addTask(new Task(
                    taskRaw[0].trim(),
                    taskRaw[1].trim(),
                    taskRaw[2].trim(),
                    taskRaw[3].trim(),
                    taskRaw[4].trim(),
                    taskRaw[5].trim()
            ));
            System.out.println("Tarefa " + taskRaw[0].trim() + " cadastrada com sucesso!\n\n");
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage() + "\n\n");
        }
    }

    private void showAllTasks() {
        System.out.println("\n\nTodas tarefas");
        List<Task> tasks = this.todoList.getTaskList();
        tasks.forEach(System.out::println);
        System.out.println("\n\n");
    }
}
