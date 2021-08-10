## INICIANDO COM SOLID

  -> SRP: Single Responsability Principle
  -> OCP: Open Closed Principle
  -> LSP: Liskov Substitution Principle
  -> ISP: Interface Segregation Principle
  -> DIP: Dependency Inversion Principle


## ATUALMENTE

  1- nossa rota esta tendo responsabilidades de mais
  (recebendo a requisicao, validando, criando dado e retornando)

  2- a rota deveria apenas receber a requisicao e repassar para o responsável em
  resolver

## RESOLVENDO ESSE PROBLEMA

  1- podemos passar a responsabilidade de criar a categoria para um Service por ex

  2- podemos passar a responsabilidades para os controllers

  3- podemos também reestruturar a organização de pastas por 'Casos de Uso' (use cases). Que seriam as regras de negócio da aplicação
