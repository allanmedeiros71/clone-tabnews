# Contexto do Projeto: Clone TabNews

Este arquivo contém informações contextuais para auxiliar o Gemini Code Assist a gerar código alinhado com o projeto.

## Visão Geral

O projeto é um clone do TabNews, focado em aprender e aplicar conceitos sólidos de engenharia de software. É uma aplicação fullstack construída com Next.js e PostgreSQL.

## Stack Tecnológica

- **Framework**: Next.js (React no frontend, API Routes no backend).
- **Banco de Dados**: PostgreSQL.
- **Linguagem**: JavaScript (ES Modules).

## Padrões de Código e Arquitetura

1. **Infraestrutura**: O acesso a recursos externos (como banco de dados) deve ser centralizado na pasta `infra`. Exemplo: `import database from "infra/database.js";`.
2. **Nomenclatura**:
   - Variáveis locais e funções: `camelCase` (ex: `updatedAt`, `databaseStatus`).
   - Chaves de resposta da API (JSON): `snake_case` (ex: `updated_at`, `max_connections`).
3. **Tratamento de Erros**: As rotas da API devem ser robustas e retornar status HTTP apropriados.
4. **Datas**: Utilize o formato ISO 8601 para datas retornadas pela API (`new Date().toISOString()`).

## Estrutura de Pastas Relevante

- `/pages/api`: Endpoints da API (V1).
- `/infra`: Configurações de banco de dados e scripts de ambiente.
