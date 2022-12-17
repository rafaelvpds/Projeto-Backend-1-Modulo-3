# Reviews and Books API - NODE EXPRESS TS TEMPLATE

Esse é o repositório para o back-end da aplicação de books e reviews. Foi criada uma API Rest com Node Express.

## Tecnologias utilizadas
* Node.js
* Express
* Mongoose (mongoDB)
* TypeScript

## Estrutura em camada:
O projeto foi realizado com a arquitetura em camada. Segue explicação da responsabilidade de cada camada do projeto.

| Nome | Descrição |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **Model**| É o modelo do banco de dados criado com o ORM/Bbibilioteca |
| **Repository**| Camada que recebe o Model, é onde fazemos as nossas queries|
| **Serviço**| Camada de regra de negócio, recebe o Repository, é onde fica tratamento da maior partes dos erros.|
| **Controllers**| Camada de entrada, recebe o Service é onde fica Req/Res, status code, erros de body, etc |
| **Routes**| É onde definimos os endpoints e invocamos os controllers |
## Estrutura do projeto
A estrutura de pastas do projeto é explicada a seguir:

| Nome | Descrição |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contém todas as dependências npm |
| **src**       | Contém os diretórios src/db, src/books, src/reviews, src/test  e src/utils |
| **src/db**    | Contém arquivo seeder.ts, para realizar um processo de seeding inicial
| **src/books** | Contém todo o domínio de Posts: com seus respectivos controllers, models, repositories, services, factory e rotas.
| **src/books/__mocks__**  | Contém todos os mocks da aplicação, para a realização dos testes.
| **src/books/controllers** | Contém a classe BookController com os métodos: getAll, getById, create, update e updateStatus. Acompanha arquivo de testes de controller.
| **src/books/factories** | Contém função bookFactory, responsável por instanciar repository, service e controller.    
| **src/books/models**      | Contém o Schema para a model de review e cria Model da aplicação.|
| **src/books/repository**  | . Contém a classe BookRepository: repositório com os métodos getAll, getById, create, update e updateStatus|   
| **src/books/routes**  | É onde definimos os endpoints da entidade book|  
| **src/books/services**     | Contém classe BookService: serviço com os métodos getAll, getById, create, update updateStatus.|
| **src/books/utils** | Contém 1 arquivos: 1. book.body.validator função de validação do body.|
| **src/reviews** | Contém todo o domínio do reviews: com seus respectivos controllers, models, repositories, services, factory e rotas.|
| **src/reviews/__mocks__**  | Contém todos os mocks da aplicação, para a realização dos testes.|
| **src/reviews/controllers** | Contém a classe ReviewController com os métodos: getAll, getById, create e update. Acompanha arquivo de testes de controller.|
| **src/reviews/factories** | Contém função reviewFactory, responsável por instanciar repository, service e controller.    
| **src/reviews/models**      | Contém o Schema para a model de reviews e cria Model da aplicação.|
| **src/reviews/repository**  | Contém classe ReviewRepository: repositório com os métodos getAll, getById, create e update|         
| **src/reviews/services**     | Contém classe ReviewService: serviço com os métodos getAll, getById, create e update.
| **src/reviews/utils** | Contém 1 arquivos: 1. book.body.validator função de validação do body.|
| **package.json** | Contém todas as dependências instaladas assim como os scripts da aplicação |     

## Pré-requisitos
- É esperado que o <a href="https://nodejs.org/en/">Node.js</a> esteja instalado.
- Na raiz no projeto, crie um arquivo <strong>.env</strong>, adicione sua string de conexão do MongoDB à chave MONGO, como demonstrado a seguir:
```
MONGO="sua-string-de-conexão"
```
### Instalação

Instale as dependências:

```
npm install
```

Rode o script de seed:

```
npm run seed
```

Rode o index para rodar localmente:

```
npm run dev

```
### Rodando os testes
Para executar os testes, rode o script:
```
npm run test
```
Para visualizar a cobertura de testes da aplicação, use o script:
```
npm run coverage
```

### Quantidade de testes realizados e cobertura da aplicação:
![Test integration project](https://user-images.githubusercontent.com/33781893/207997403-a2f3909f-0fdd-44ed-8e92-04d75b46d4a9.jpg)

## Como usar os endpoints
*Books*
| Endpoint | Input |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| GET /                 | Não é necessário input, retornará todas os books  |
| GET /:id         | Necessário indicar id válido nos parâmetros da rota, retorna o book com o id selecionado.             |
| GET /?author ="nomeAuthor"| É necessário passar um parametro (string) para está realizando as buscas dos livro com base no autor passado pelo parametro.                              |
| POST /   | Necessário informar JSON válido (exemplo: { "title": "título do livro", "language": "idioma do livro", "statusBooks": mostrara se o livro está disponível para venda, "author": "nome do autor do respectivo livro", "review": "resenha do respectivo livro"(objectId)}), retornará a o book criado. Observação: a chave "review" não é obrigatória para criar o book.|
| PUT /:id/status | Necessário indicar id válido nos parâmetros da rota e qual chave deseja alterar ({"statusBooks":}).  |
| PUT /:id | Necessário indicar id válido nos parâmetros da rota e qual chave deseja alterar (language ou review).             |


*reviews*

| Endpoint | Input |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| GET /                 | Não é necessário input, retornará todas as resenhas salvas no banco de dados  |
| GET /:id         | Necessário indicar id válido nos parâmetros da rota, retorna review com o id selecionado.             |
| POST /   | Necessário informar JSON válido (exemplo: { "title": "título da resenha", "review": "a resenha do livro", "note": "nota da resenha"}), retornará a o book criado. Observação: todas as chave são necessárias para a criação de uma resenha.|
| PUT /:id| Necessário indicar id válido nos parâmetros da rota e a chave {"review":} para fazer a alteração.  |

