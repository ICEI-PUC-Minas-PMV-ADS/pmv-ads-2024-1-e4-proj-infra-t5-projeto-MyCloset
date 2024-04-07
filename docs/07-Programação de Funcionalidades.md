# Programação de Funcionalidades

## Documentação da API - My Closet

## Visão Geral
A API do My Closet permite aos usuários gerenciar seu guarda-roupa virtual e eventos associados às roupas. As principais funcionalidades incluem a criação de eventos, associação de roupas a eventos e listagem de roupas e eventos.

## Configuração Local
- **Banco de Dados:** MongoDB rodando localmente. Certifique-se de que o MongoDB está instalado e que você tem uma pasta `C:\data\db` para armazenar os dados.
- **Servidor:** API desenvolvida em Node.js com Express. Rodando localmente na porta 3000.

## Endpoints

## Eventos

#### Criar Evento
- **URL Local:** `http://localhost:3000/api/eventos`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "nome": "Entrevista de Emprego",
    "descricao": "Entrevista para a vaga de desenvolvedor",
    "data": "2024-05-20",
    "tipo": "Formal",
    "usuario": "usuarioId123"
  }
  ```
- **Resposta:** Evento criado com status 201.

#### Listar Eventos de um Usuário
- **URL Local:** `http://localhost:3000/api/eventos/usuario/:usuarioId`
- **Método:** `GET`
- **Resposta:** Lista de eventos do usuário.

## Roupas

#### Listar Roupas de um Usuário
- **URL Local:** `http://localhost:3000/api/roupas/usuario/:usuarioId`
- **Método:** `GET`
- **Resposta:** Lista de roupas do usuário.

#### Associar Roupa a Evento
- **URL Local:** `http://localhost:3000/api/eventos/:eventoId/roupa`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "roupaId": "roupaId456"
  }
  ```
- **Resposta:** Evento atualizado com a roupa associada.

#### Remover Roupa de Evento
- **URL Local:** `http://localhost:3000/api/eventos/:eventoId/roupa/:roupaId`
- **Método:** `DELETE`
- **Resposta:** Evento atualizado com a roupa removida.

## Autenticação
Todos os endpoints requerem autenticação. O token de autenticação deve ser incluído no cabeçalho da requisição:

```
Authorization: Bearer <seu_token>
```
```

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
