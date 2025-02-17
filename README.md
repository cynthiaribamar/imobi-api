# imobi-api

Este projeto é uma REST API de uma imobiliária virtual com registro e login de usuário, desenvolvida com NestJS com banco de dados MySQL. Para rodá-lo localmente, siga os passos abaixo.

### Pré-requisitos

- [Docker](https://www.docker.com/) instalado  
- [Node.js](https://nodejs.org/en/) instalado  

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/cynthiaribamar/imobi-api
   cd imobi-api

2. Crie um arquivo `.env` na raiz do projeto, use as variáveis do arquivo .env.example com suas credenciais.

3. Crie e inicie um container com MySQL:

   ```bash
   docker-compose up -d

4. Verifique se o container está rodando:
   ```bash
   docker ps

5. Para acessar o banco de dados via terminal:
   ```bash
   docker exec -it mysql_imobi mysql -u root -p
   
6. Instale as dependências:
   ```bash
   npm i


7. Para rodar a aplicação em modo de desenvolvimento, digite no terminal:
   ```bash
   npm run start:dev

A API estará disponível em `http://localhost:3000`.



