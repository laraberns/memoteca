# 🧠 Memoteca

Memoteca é um projeto desenvolvido com **Angular** cujo objetivo é demonstrar a criação de um **CRUD** completo utilizando o **Angular CLI**, integração com o **JSON Server**, e o uso de recursos fundamentais da framework como componentes, serviços, diretivas, rotas dinâmicas e injeção de dependências.

---

## 📌 Objetivo

Criar uma aplicação web que permita:

- Criar novos "pensamentos" (notas);
- Listar todos os pensamentos salvos;
- Editar pensamentos existentes;
- Excluir pensamentos;
- Explorar conceitos fundamentais do Angular em uma aplicação real.

---

## 🆕 Novidades na nova versão

- Construção de **formularios reativos** para melhor controle e validação dos dados;
- Implementação de **validações nos campos** para garantir integridade dos dados inseridos;
- Implementação do **campo de busca** para filtrar pensamentos rapidamente;
- Adição de **paginação** para melhor navegação em listas longas;
- Funcionalidade de **favoritar pensamentos** para acesso rápido aos favoritos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- [Angular CLI](https://angular.io/cli)
- [Angular 15+](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Angular CLI instalado globalmente (npm install -g @angular/cli)
- JSON Server instalado globalmente (npm install -g json-server)

1. **Clone o repositório:**

```bash
git clone https://github.com/laraberns/memoteca.git
cd memoteca
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o JSON Server:**

```bash
json-server --watch db.json --port 3000
```

> O arquivo db.json serve como banco de dados fake para simular requisições HTTP.

4. **Execute a aplicação Angular:**

```bash
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🧭 Conceitos importantes utilizados

### 🔹 Componentes
Criados via Angular CLI para modularizar a aplicação. Cada funcionalidade é organizada em um componente reutilizável.

### 🔹 Serviços (Services)
Utilizados para centralizar a lógica de acesso a dados e reaproveitar código, como chamadas HTTP.

### 🔹 Injeção de Dependência
O Angular injeta automaticamente serviços nos componentes que dependem deles, garantindo baixo acoplamento.

### 🔹 HttpClient
Serviço nativo do Angular para realizar requisições HTTP (GET, POST, PUT, DELETE). Usado junto com Observable do RxJS.

### 🔹 Rotas Dinâmicas
Uso de parâmetros nas rotas como /editarPensamento/:id para acessar detalhes específicos.

### 🔹 Diretivas Angular
- *ngIf: renderiza elementos condicionalmente;
- *ngFor: itera sobre listas;
- [ngClass]: aplica classes CSS condicionalmente.

### 🔹 Formulários Reativos
Permitem controle mais detalhado do estado do formulário e validações reativas.

### 🔹 Validações de Campos
Garantem que os dados informados pelo usuário atendam aos critérios exigidos antes de salvar.

### 🔹 Campo de Busca
Funcionalidade para filtrar pensamentos exibidos conforme texto digitado.

### 🔹 Paginação
Divisão da lista de pensamentos em páginas para melhorar a usabilidade em listas longas.

### 🔹 Favoritos
Permite marcar pensamentos como favoritos para acesso rápido e destaque.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizar e adaptar!

---

Desenvolvido por Lara
