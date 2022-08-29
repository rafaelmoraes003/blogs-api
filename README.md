<h1 align="left">Projeto Blogs API</h1>

###

<p align="left">Neste projeto  foi criada uma API e um banco de dados para a produção de conteúdo para um blog.<br><br>A  aplicação foi desenvolvida em Node.js usando o pacote Sequelize com um banco de dados MySQL para fazer um CRUD de posts seguindo os princípios do REST.<br><br>Nela, é possível acessar endpoints que trazem informações sobre usuários, publicações e categorias de temas de publicações, além de ser possível criar novos dados sobre sobre os mesmos, atualizá-los e deletá-los.<br><br>O objetivo do projeto era conseguir utilizar o Sequelize para criação, povoamento, realização de operações de leitura, criação, atualização e exclusão no banco de dados e criação de relacionamentos entre tabelas<br><br>Para garantir a segurança e integridade da aplicação, a autenticação e autorização dos endpoints foram feitas através do JSON Web Token.</p>

###

###

<h2 align="left">Tecnologias utilizadas</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
</div>

###

<h2 align="left">Como utilizar a aplicação</h2>

###

Faça o clone da aplicação usando o comando `git clone`. Após isso, entre na pasta do projeto utilizando o comando `cd blogs-api` e rode o comando `npm install`. Após a instalação, utilize o comando `npm start` e entre na porta 3000 de seu navegador.

###

<h2 align="left">Sobre o banco de dados</h2>

###

<p align="left">- Deleta o banco de dados</p>

`npm run drop`

<p align="left">- Cria o banco e gera as tabelas</p>

`npm run prestart`

<p align="left">- Insere dados/popula as tabelas</p>

`npm run seed`

###
