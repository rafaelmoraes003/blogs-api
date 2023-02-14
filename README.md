<h1 align="left">Blogs API</h1>

###

<p align="left">In this project an API and a database were created for the production of content for a blog.<br><br>The application was developed in Node.js using the Sequelize package with a MySQL database to make a CRUD of posts following the principles of REST.<br><br>In it, it is possible to access endpoints that bring information about users, publications and categories of publication themes, in addition to being possible to create new data about them, update them and delete them. los.<br><br>The objective of the project was to be able to use Sequelize to create, populate, perform read, create, update and delete operations in the database and create relationships between tables<br><br>To to guarantee the security and integrity of the application, the authentication and authorization of the endpoints were done through the JSON Web Token.</p> 

###

<h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" width="62" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="62" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="50" width="62" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" width="62" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" width="62" alt="mysql logo"  />
</div>

###

<h2 align="left">How to use the application</h2>

###

Clone the application using the `git clone` command. After that, enter the project folder using the `cd blogs-api` command and run the `npm install` command. After installation, use the `npm start` command and enter port 3000 in your browser.

###

<h2 align="left">About the database</h2>

- Delete the database

`npm run drop`

- Create the database and generate the tables

`npm run prestart`

- Insert data/populate tables

`npm run seed`

###

<h2 align="left">Endpoints</h2>

###

<h2 align="left">Login</h2>

| Method | Functionality | URL |
|---|---|---|
| `POST` | Login with an existing user | http://localhost:3001/login |

<h4>The object to login must have the following format:</h4>

```JavaScript
{
  email: "username@email.com",
  password: "123456"
}
```

###

<h2 align="left">User</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all users | http://localhost:3001/user |
| `GET` | List a user based on its id | http://localhost:3001/user/:id |
| `POST` | Create a new user | http://localhost:3001/user |
| `DELETE` | Delete the user who owns the session | http://localhost:3001/user/ME |

<h4>The object to create a new user must have the following format:</h4>

```JavaScript
{
  displayName: "username",
  email: "username@email.com",
  password: "123456",
  image: /* image url for user profile */
}
```

###

<h2 align="left">Post</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all posts | http://localhost:3001/post |
| `GET` | Lists the post (or posts) that have a certain term included in their title or content | http://localhost:3001/post/search?q |
| `GET` | List a post based on its id | http://localhost:3001/post/:id |
| `POST` | Create a new post | http://localhost:3001/post |
| `PUT` | Update an existing post based on its id if the user in session owns that post | http://localhost:3001/post/:id |
| `DELETE` | Delete a post based on its id if the user in session owns that post | http://localhost:3001/post/:id |

<h4>The object to create a new post must have the following format:</h4>

```JavaScript
{
  title: "My Post",
  content: "Women in Tech",
  categoryIds: [2, 5],
}
```

###

<h2 align="left">Categories</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all categories | http://localhost:3001/categories |
| `POST` | Create a new category | http://localhost:3001/categories |

<h4>The object to create a new category must have the following format:</h4>

```JavaScript
{
  name: "Tech"
}
```

###

<h2 align="left">COMMENTS</h2>

All endpoints (`except` `POST` ( `/login` and `/user`) require authorization through `JWT`. To acquire this token, it is necessary to create a user or log in with an existing user and place this token in the Authorization header of the request.
