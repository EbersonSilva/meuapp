# Sistema de Gerenciamento Empresarial

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen)
![Licença](https://img.shields.io/badge/Licença-ISC-blue)
![Versão](https://img.shields.io/badge/Versão-1.0.0-orange)

## 📋 Descrição

Sistema de gerenciamento empresarial com controle de usuários, clientes, produtos, categorias e vendas. Desenvolvido com Node.js, TypeScript, Express e TypeORM.

## 🚀 Funcionalidades

- ✅ **Autenticação segura** com JWT (JSON Web Token)
- ✅ **Controle de usuários** com diferentes níveis de acesso
- ✅ **Cadastro de clientes** com validação de dados
- ✅ **Gerenciamento de produtos** com categorização
- ✅ **Controle de vendas** com registro completo
- ✅ **API RESTful** documentada e segura

## 🛠️ Tecnologias

- **Node.js** - Ambiente de execução
- **TypeScript** - Linguagem de programação
- **Express** - Framework web
- **TypeORM** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas

## 📦 Estrutura do Projeto

```
src/
├── controller/       # Controladores para cada entidade
├── entity/           # Entidades do banco de dados
├── interface/        # Interfaces TypeScript
├── middleware/       # Middlewares da aplicação
├── repository/       # Repositórios do TypeORM
├── service/          # Serviços com regras de negócio
├── database/         # Configuração do banco de dados
├── routes.ts         # Definição das rotas da API
└── server.ts         # Ponto de entrada da aplicação
```

## 📊 Entidades

- **Usuários**: Gerenciamento de contas e autenticação
- **Clientes**: Cadastro e manutenção de clientes
- **Produtos**: Gerenciamento de produtos
- **Categorias**: Categorização de produtos
- **Vendas**: Registro e acompanhamento de vendas

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/EbersonSilva/meuapp.git
   cd meuapp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   
   Modifique o arquivo `ormconfig.json` com suas credenciais do PostgreSQL.

4. **Execute as migrações**
   ```bash
   npm run typeorm migration:run
   ```

5. **Inicie o servidor**
   ```bash
   npm run dev
   ```

## 🔒 Autenticação

O sistema utiliza autenticação JWT. Para acessar rotas protegidas:

1. Faça login com email e senha para obter o token
2. Adicione o token no header das requisições:
   ```
   Authorization: Bearer {seu-token}
   ```

## 🔍 Rotas da API

### Autenticação
- `POST /login` - Autenticar usuário
- `POST /users` - Criar novo usuário

### Usuários (Requer autenticação)
- `GET /users` - Listar todos os usuários
- `PUT /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

### Clientes (Requer autenticação)
- `GET /clients` - Listar todos os clientes
- `POST /clients` - Criar novo cliente
- `PUT /clients/:id` - Atualizar cliente
- `DELETE /clients/:id` - Deletar cliente

### Produtos (Requer autenticação)
- `GET /products` - Listar todos os produtos
- `POST /products` - Criar novo produto
- `PUT /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Categorias (Requer autenticação)
- `GET /categories` - Listar todas as categorias
- `POST /categories` - Criar nova categoria
- `PUT /categories/:id` - Atualizar categoria
- `DELETE /categories/:id` - Deletar categoria

### Vendas (Requer autenticação)
- `GET /sales` - Listar todas as vendas
- `POST /sales` - Criar nova venda
- `PUT /sales/:id` - Atualizar venda
- `DELETE /sales/:id` - Deletar venda

## 📝 Scripts

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm start` - Inicia o servidor
- `npm run typeorm` - Execute comandos do TypeORM

## ✨ Próximos passos

- [ ] Implementar testes automatizados
- [ ] Adicionar validação avançada de dados
- [ ] Implementar sistema de logs
- [ ] Desenvolver interface de usuário
- [ ] Adicionar relatórios e dashboards

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Eberson Silva © 2025
