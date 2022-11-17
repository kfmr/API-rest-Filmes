## API Filmes
API que realiza CRUD de filmes e atores baseada no projeto [API REST - Alura](https://cursos.alura.com.br/course/nodejs-api-rest-padronizada-escalavel).
### Tecnologias
- Nodejs
- MySQL with Sequelize

### Executar aplicação
Instalar dependências: <br>
``` npm i```<br>
Executar aplicação:<br>
```npm run dev```


### Estrutura da API

*JSON*
```
{
  "id": 8,
  "nome": "Yumi's Cells",
  "genero": "Drama",
  "diretor": "Lee Sang-yeob",
  "createdAt": "2021-12-11T20:01:13.000Z",
  "updatedAt": "2021-12-11T20:01:13.000Z"
}
```
*XML*
```
<register>
	<id>7</id>
	<nome>Yumi's Cells</nome>
	<genero>Drama</genero>
	<diretor>Lee Sang-yeob</diretor>
	<id>8</id>
	<nome>Yumi's Cells</nome>
	<genero>Comedy</genero>
	<diretor>Lee Sang-yeob</diretor>
	<id>12</id>
	<nome>Our Beloved Summer</nome>
	<genero>Drama</genero>
	<diretor>Kim Yoon-jin</diretor>
</register>
```
