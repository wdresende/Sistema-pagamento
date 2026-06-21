# Sistema de Pagamento - Pipeline CI com GitHub Actions

## Descrição do Projeto

Este projeto foi desenvolvido como parte de uma atividade acadêmica da pós-graduação. A aplicação consiste em um sistema simples de pagamentos em JavaScript, contendo regras para realização de pagamentos e consulta do último pagamento realizado.

O objetivo deste trabalho é implementar uma pipeline de Integração Contínua utilizando GitHub Actions, executando testes automatizados e gerando relatórios de execução.

## Tecnologias Utilizadas

* JavaScript
* Node.js
* Mocha
* Mochawesome
* GitHub Actions

## Estrutura do Projeto

```txt
sistema-pagamento/
├── .github/
│   └── workflows/
│       └── ci-tests.yml
├── src/
│   └── SistemaPagamento.js
├── test/
│   └── SistemaPagamento.test.js
├── package.json
├── package-lock.json
└── README.md
```

## Funcionalidades Testadas

O projeto possui testes automatizados para validar as regras do sistema de pagamento, incluindo:

* Realização de pagamento.
* Classificação de pagamento conforme o valor informado.
* Validação de valor inválido.
* Consulta do último pagamento realizado.

## Testes Automatizados

Os testes automatizados foram implementados utilizando o framework Mocha.

Para executar os testes localmente:

```bash
npm test
```

Para executar os testes com geração de relatório:

```bash
npm run test:report
```

O relatório é gerado na pasta:

```txt
reports/
```

## Pipeline de Integração Contínua

A pipeline foi configurada utilizando GitHub Actions no arquivo:

```txt
.github/workflows/ci-tests.yml
```

A pipeline executa automaticamente os testes do projeto e gera o relatório de execução.

## Formas de Execução da Pipeline

A pipeline foi configurada para executar de três formas:

### Execução por Push

A execução por push ocorre sempre que uma alteração é enviada para a branch `main`.

```yaml
on:
  push:
    branches:
      - main
```

### Execução Manual

A execução manual pode ser feita pela aba **Actions** do GitHub, utilizando a opção **Run workflow**.

```yaml
workflow_dispatch:
```

### Execução Agendada

A execução agendada foi configurada com cron.

```yaml
schedule:
  - cron: '0 11 * * 1'
```

Essa configuração executa a pipeline semanalmente, toda segunda-feira às 11:00 UTC, equivalente a aproximadamente 08:00 no horário de Brasília.

## Etapas da Pipeline

A pipeline executa as seguintes etapas:

1. Baixa o código do repositório.
2. Configura o ambiente Node.js.
3. Instala as dependências com `npm ci`.
4. Executa os testes automatizados.
5. Gera o relatório de testes.
6. Publica o relatório como artifact da pipeline.

## Relatório de Testes

O relatório de testes é gerado utilizando o Mochawesome.

Após a execução da pipeline, o relatório fica disponível na seção **Artifacts** da execução do GitHub Actions, com o nome:

```txt
relatorio-testes
```

Esse artifact contém o relatório HTML gerado durante a execução dos testes.

## Conceitos Aplicados

Neste trabalho foram aplicados os seguintes conceitos:

* Integração Contínua.
* Automação de testes.
* Execução automatizada de pipeline.
* Execução manual de workflow.
* Execução agendada com cron.
* Geração de relatório de testes.
* Armazenamento de evidências por meio de artifacts.
* Versionamento de código com Git e GitHub.

## Evidência da Execução

A evidência da execução bem-sucedida da pipeline pode ser consultada na aba **Actions** do repositório.

Exemplo de evidência:

```txt
https://github.com/wdresende/Sistema-pagamento/actions/runs/27912805089
```

## Repositório

```txt
https://github.com/wdresende/Sistema-pagamento
```
