![fluxo de trabalho de exemplo](https://github.com/IgorSouzaBezerra/church/actions/workflows/main.yml/badge.svg)

# Requisitos

## Node(server)


### categories
- [x] Deve ser possivel criar uma categoria.
- [x] Deve ser possivel editar uma categoria.
- Deve ser possivel excluir categoria desde que nuca usada.
- [x] Não deve ser possivel cadastrar uma categoria descrição já existente.


table name | type       |default |
:---------:|:----------:|:------:|
id         | varchar    |uuid    |
name       | varchar    |        |
description| varchar    |        |
created_at | timestamp  |now()   |



### products
- [] Deve ser possível criar um produto.
- [] Ao criar um produto ele deve ser por padrão ativo.
- [] Deve ser possível editar um produto.
- [] Deve ser possível excluir um produto desde que nunca usado, se usado apenas desativa-lo.
- [] Deve ser possivel desativar um produto.



### cost_center
- [] Deve ser possível criar um centro de custo.
- [] Deve ser possivel editar um centro de custo.
- [] Deve ser possivel excluir um centro de custo desde que nunca usado.



### users
- [] Deve ser possivel criar um usuário
- [] Ao criar um usuário ele deve ser por padrão ativo
- [] Deve ser possivel editar um usuários
- [] Deve ser possivel redefir a senha de um usuário
- [] Deve ser possivel inativar um usuários



### orders
- [] Deve ser possivel criar um pedido
- [] Deve ser possivel editar um pedido
- [] O pedido deve ter os status 
   - Em andamento/Concluíodo/Cancelado
- [] Deve ser possivel cancelar um pedido


## ReactJs(client)
