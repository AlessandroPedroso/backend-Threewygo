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

- rodar o comando para criar a pasta node_modules

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
- ```
  - Criar o database:threewygo
  ```
- após criar a database, executar o comando `npx sequelize db:migrate`

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

- Rota criação do curso `POST`: `http://localhost:3000/curso`
- Propriedades para enviar no form-data:

```
key: titulo value: Curso de Vue
key: descricao value: Curso iniciantes para Vue
key: dataTermino value: 21/09/2024
key: file value: imagem.jpg
```

- Resultado do BODY `status 201`:

```
{
  "message": "Curso cadastrado com sucesso!"
}
```

- Listar Curso `GET`: `http://localhost:3000/curso`
- Apenas executar:

- Resultado do BODY `status 200`:

```
[
  {
    "id": 17,
    "titulo": "Curso de react",
    "descricao": "Curso iniciantes para react",
    "dataTermino": "2024-09-21",
    "imagemCurso": "http://localhost:3000/curso-file/540333f9-e915-416e-8e31-74a8f5654651.jpg"
  },
  {
    "id": 18,
    "titulo": "Curso de Vue",
    "descricao": "Curso iniciantes para Vue",
    "dataTermino": "2024-09-21",
    "imagemCurso": "http://localhost:3000/curso-file/6f9b4c66-c4dc-4cc1-9a1a-398af9bc9db6.jpg"
  }
]
```

- Listar somente um CURSO, passar o id do curso `GET`: `http://localhost:3000/curso/18`
- Apenas executar:

- Resultado do BODY `status 200` com o curso e seus videos relacionado:

```
{
  "url": "http://localhost:3000/curso-file/6f9b4c66-c4dc-4cc1-9a1a-398af9bc9db6.jpg",
  "id": 18,
  "titulo": "Curso de Vue",
  "descricao": "Curso iniciantes para Vue",
  "data_termino": "2024-09-21",
  "img_curso": "6f9b4c66-c4dc-4cc1-9a1a-398af9bc9db6.jpg",
  "createdAt": "2024-09-20T12:57:08.974Z",
  "updatedAt": "2024-09-20T12:57:08.974Z",
  "videos": [
    {
      "url": "http://localhost:3000/video-file/43365d6f-ba20-47ec-934e-b1565d966028.jpg",
      "descricao": "1 aula de vue",
      "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
      "path_image": "43365d6f-ba20-47ec-934e-b1565d966028.jpg"
    },
    {
      "url": "http://localhost:3000/video-file/2e6f0a54-0e00-4669-8d13-e0f57ff65314.jpg",
      "descricao": "2 aula de vue",
      "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
      "path_image": "2e6f0a54-0e00-4669-8d13-e0f57ff65314.jpg"
    }
  ]
}
```

- Alterar um curso especifico `PUT`: `http://localhost:3000/curso/18`
- Apenas executar:

- Propriedades para enviar no form-data:

```
key: titulo value: Curso de Vue
key: descricao value: Curso iniciantes para Vue
key: dataTermino value: 21/09/2024
key: file value: imagem.jpg
```

- Resultado do BODY `status 200`:

```
{
  "message": "Curso alterado com sucesso!"
}
```

- Deletar um curso especifico `DELETE`: `http://localhost:3000/curso/18`
- Apenas executar:

- Resultado do BODY `status 200`:

```
{
  "message": "Curso Deletado!"
}
```

### Rota dos videos

Observação: Optei por adicionar o link de um vídeo, pois, geralmente, os vídeos são hospedados em serviços como o Vimeo, e não diretamente no projeto. Considerando as melhores práticas, segui essa abordagem. No entanto, para demonstrar meu conhecimento em upload de arquivos, implementei a funcionalidade de upload de imagens e vídeos diretamente para o curso.

- Rota criação do video `POST`: `http://localhost:3000/videoCurso`
- Propriedades para enviar no form-data:

```
key: descricao value: 1 aula de vue
key: linkVideo value: https://www.youtube.com/watch?v=M7Te5yrvxlo
key: cursoId value: 18
key: file value: imagem.jpg
```

- Resultado do BODY `status 201`:

```
{
  "message": "Video criado com Sucesso!"
}
```

- Listar videos `GET`: `http://localhost:3000/videoCurso`
- Apenas executar:

- Resultado do BODY `status 200`:

```
[
  {
    "url": "http://localhost:3000/video-file/54fb16d2-ccc9-4071-ba56-f9315e15c222.jpg",
    "id": 4,
    "descricao": "1 aula de react",
    "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
    "path_image": "54fb16d2-ccc9-4071-ba56-f9315e15c222.jpg",
    "createdAt": "2024-09-20T13:01:52.352Z",
    "updatedAt": "2024-09-20T13:01:52.352Z",
    "curso_id": 17,
    "curso": {
      "id": 17,
      "titulo": "Curso de react",
      "descricao": "Curso iniciantes para react",
      "data_termino": "2024-09-21",
      "img_curso": "540333f9-e915-416e-8e31-74a8f5654651.jpg"
    }
  },
  {
    "url": "http://localhost:3000/video-file/50b4b354-afa0-4808-80b2-96de36e3d89f.jpg",
    "id": 5,
    "descricao": "2 aula de react",
    "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
    "path_image": "50b4b354-afa0-4808-80b2-96de36e3d89f.jpg",
    "createdAt": "2024-09-20T13:02:00.912Z",
    "updatedAt": "2024-09-20T13:02:00.912Z",
    "curso_id": 17,
    "curso": {
      "id": 17,
      "titulo": "Curso de react",
      "descricao": "Curso iniciantes para react",
      "data_termino": "2024-09-21",
      "img_curso": "540333f9-e915-416e-8e31-74a8f5654651.jpg"
    }
  },
  {
    "url": "http://localhost:3000/video-file/43365d6f-ba20-47ec-934e-b1565d966028.jpg",
    "id": 6,
    "descricao": "1 aula de vue",
    "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
    "path_image": "43365d6f-ba20-47ec-934e-b1565d966028.jpg",
    "createdAt": "2024-09-20T13:02:24.727Z",
    "updatedAt": "2024-09-20T13:02:24.727Z",
    "curso_id": 18,
    "curso": {
      "id": 18,
      "titulo": "Curso de Vue",
      "descricao": "Curso iniciantes para Vue",
      "data_termino": "2024-09-21",
      "img_curso": "6f9b4c66-c4dc-4cc1-9a1a-398af9bc9db6.jpg"
    }
  },
  {
    "url": "http://localhost:3000/video-file/2e6f0a54-0e00-4669-8d13-e0f57ff65314.jpg",
    "id": 7,
    "descricao": "2 aula de vue",
    "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
    "path_image": "2e6f0a54-0e00-4669-8d13-e0f57ff65314.jpg",
    "createdAt": "2024-09-20T13:02:34.359Z",
    "updatedAt": "2024-09-20T13:02:34.359Z",
    "curso_id": 18,
    "curso": {
      "id": 18,
      "titulo": "Curso de Vue",
      "descricao": "Curso iniciantes para Vue",
      "data_termino": "2024-09-21",
      "img_curso": "6f9b4c66-c4dc-4cc1-9a1a-398af9bc9db6.jpg"
    }
  }
]
```

- Listar somente um video, passar o id do video`GET`: `http://localhost:3000/videoCurso/4`
- Apenas executar:

- Resultado do BODY `status 200` com o video e seu curso relacionado:

```
{
  "url": "http://localhost:3000/video-file/54fb16d2-ccc9-4071-ba56-f9315e15c222.jpg",
  "id": 4,
  "descricao": "1 aula de react",
  "link_video": "https://www.youtube.com/watch?v=M7Te5yrvxlo",
  "path_image": "54fb16d2-ccc9-4071-ba56-f9315e15c222.jpg",
  "createdAt": "2024-09-20T13:01:52.352Z",
  "updatedAt": "2024-09-20T13:01:52.352Z",
  "curso_id": 17,
  "curso": {
    "id": 17,
    "titulo": "Curso de react",
    "descricao": "Curso iniciantes para react",
    "data_termino": "2024-09-21",
    "img_curso": "540333f9-e915-416e-8e31-74a8f5654651.jpg"
  }
}
```
