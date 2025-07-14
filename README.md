# Lista de Tarefas (ToDo List)

## Descrição

Projeto web com múltiplos serviços Docker:
- Frontend em HTML/JS
- Backend Node.js + Express
- MongoDB para armazenamento
- Mongo Express para visualização dos dados

## Como executar

```bash
cp .env.template .env
docker compose up --build
```

## Acessos

- Frontend: http://localhost:8080
- Backend API: http://localhost:3000/tasks
- Admin DB: http://localhost:8081

## Arquitetura

```mermaid
graph TD;
  F[Frontend (Nginx)] -->|HTTP| B[Backend (Express)]
  B -->|Mongoose| M[MongoDB]
  ME[Mongo Express] --> M
```
