# TODO-List

## Descrição

Trata-se de uma aplicação Java para gerenciar uma lista de tarefas (To-Do List) através de um menu em linha de comando. A classe `CommandLine` gerencia a interação com o usuário, permitindo que ele execute várias operações sobre as tarefas, como adicionar, listar, buscar, atualizar, excluir e filtrar tarefas com base em diferentes critérios.

## Tecnologias Utilizadas

1. **Java SE (Standard Edition)**: O código é escrito em Java, uma linguagem de programação amplamente utilizada para aplicações de desktop, web, e dispositivos móveis.
2. **Java Collections Framework**: A classe utiliza `List` para armazenar as tarefas, provavelmente implementada através de `ArrayList` ou `LinkedList`.
3. **Java Time API**: O uso de `LocalDate` sugere que a aplicação manipula datas com a API de tempo do Java (`java.time`).
4. **Scanner**: A classe `Scanner` é usada para capturar a entrada do usuário via linha de comando.
5. **Padrão Singleton**: A classe `TodoList` é implementada como um Singleton, garantindo que exista apenas uma instância da lista de tarefas em toda a aplicação.

## Como Executar o Código

1. **Configuração do Ambiente**:
    - Certifique-se de ter o JDK (Java Development Kit) instalado no seu sistema. O JDK deve ser configurado corretamente no PATH do sistema.
    - Se você não tem um IDE (como IntelliJ IDEA, Eclipse) ou não deseja usar um, você pode compilar e executar o código a partir da linha de comando.

2. **Compilação**:
    - Copie os arquivos para seu computador.
    - Compile o código usando o comando:
      ```bash
      javac Main.java
      ```
    - O comando acima criará um arquivo `.class` correspondente ao código Java.

3. **Execução**:
    - Execute o programa compilado com o seguinte comando:
      ```bash
      java Main
      ```
    - O programa iniciará e mostrará o menu interativo para que você possa gerenciar a lista de tarefas.

## Comentários sobre a Solução

- **Interatividade com o Usuário**: O uso de um menu baseado em texto é uma solução simples e eficaz para a interação com o usuário. No entanto, o código exige que o usuário insira informações no formato correto, como `nome; descricao; encerramento; prioridade; categoria; status` para cadastrar ou atualizar uma tarefa. Uma melhoria possível seria adicionar validações mais robustas para garantir que a entrada do usuário esteja correta.

- **Modularidade**: O código está razoavelmente bem modularizado, com métodos separados para cada funcionalidade. Isso facilita a manutenção e a extensão do código.

- **Uso de Singleton**: A `TodoList` é implementada como um Singleton, o que é adequado se você quiser garantir que apenas uma lista de tarefas seja compartilhada em toda a aplicação. No entanto, esse padrão pode tornar o código menos flexível, por exemplo, se você quiser suportar múltiplas listas de tarefas.

- **Eficiência**: As operações de filtragem e busca são feitas em listas, o que pode ser ineficiente se a lista for muito grande. Se a lista crescer significativamente, você pode considerar usar estruturas de dados mais eficientes ou adicionar índices para melhorar a velocidade de pesquisa.

- **Manutenção de Estado**: O código atual mantém o estado (a lista de tarefas) apenas em memória. Se a aplicação for encerrada, todas as tarefas serão perdidas. Em um cenário real, seria necessário implementar uma forma de persistência, como salvar as tarefas em um arquivo ou banco de dados.

- **Feedback ao Usuário**: A aplicação fornece feedback básico ao usuário, como confirmar se uma tarefa foi adicionada ou excluída com sucesso. Esse feedback é crucial para garantir uma boa experiência do usuário.

## Conclusão

O código atual representa uma base sólida para um sistema simples de gerenciamento de tarefas em linha de comando. Com as melhorias sugeridas, ele poderia se tornar uma aplicação mais robusta, escalável e fácil de usar, adaptando-se a diferentes cenários e necessidades dos usuários.

---