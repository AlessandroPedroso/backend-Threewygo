# PROJETO BACK-END

Autor: Alessandro Schuquel Pedroso  
email 1: alessandropedrosoti@gmail.com  
email 2: alessandroschuquel.dev@gmail.com

## Tecnologias utilizada

- `Javascript`
- `Node.js`
- `Docker`
- `PostgreSql`
- `Sequelize`
- `Postman`

## Configurações para iniciar o projeto

-  rodar o comando para criar a pasta node_modules
  ```
  npm i
  ```
  - Instalar o [Docker](https://www.docker.com/) e rodar o comando do docker para criar a imagem do PostgreSql
  ```
  docker run --name dbo.threewygo-postgres -e POSTGRES_PASSWORD=postgres -p 5434:5432 -d postgres
  ```

  - COMANDOS DOCKER:
  ```
      - docker ps // lista os containers disponivel
      - docker ps -all // lista todos containers
      - docker start "nome do container"// liga o container
      - docker stop "nome do container" // para de funcionar
  ```
- estou usando o [Beekeper Studio](https://www.beekeeperstudio.io/) para visualizar as tabelas
- 
    ```
    - Criar o database:threewygo
  ```
-  após criar a database, executar o comando `npx sequelize db:migrate`


  Obs: O arquivo .env não foi utilizado para facilitar o teste das rotas após a execução dos comandos do Sequelize. No entanto, em ambientes de produção, é altamente recomendável o uso do arquivo .env para garantir maior segurança no armazenamento de credenciais e informações sensíveis.

  ### Executando rotas

- Executar o comando `npm run dev`, vai conectar a `porta 3000`.

- para executar a rota de teste e verificar que está funcionado, basta executar no postman ou navegador:
  ```
  http://localhost:3000/teste
  ```
- Resultado da rota no copo body: 
  ```
  {
    "description": "Projeto",
    "author": {
        "name": "Alessandro Schquel Pedroso",
        "email": "alessandropedrosoti@gmail.com",
        "email-2": "alessandroschuquel.dev@gmail.com",
        "url": "https://github.com/AlessandroPedroso/"
    }
  }
  ```

