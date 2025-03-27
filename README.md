# mini-app-movie-list

Notes:

From root directory (mini-app-movie-list),
- npm create vite@latest client -- --template react
- cd client

In client,
- npm install (might have to do twice)
- npm run dev

In server,
 - npm init -y
 - npm i express pg knex
 - touch .gitignore
    - add node_modules in .gitignore
- npx knex init
- open knexfile.js and add this:
```
development: {
    client: 'postgresql',
    connection: 
    {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'movie_list'
    }
  }
  ```
- npx knex migrate:make create_movies_table
- mkdir src
- cd src
- touch app.js

In src/app.js,
- paste this to start:
```
const express = require('express');
const app = express();
const PORT = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (request, response) => {
    response.send('Application up and running')
})

app.listen(PORT, () => {
    console.log('Your knex and express app are running successfully');

})
```
In another terminal, 
- docker ps -a
- docker exec -it <container_id> bash
- psql -U postgres
- \list
- CREATE DATABASE movie_list
- \list
- \c movie_list
- \dt

Back in server in vs code,
- npx knex migrate:latest

Check the other terminal,
- \dt
- Should see movies now

In server in vs code,
- npx knex migrate:rollback (table will go away)
- npx knex migrate:latest (lets bring the table back)

To seed, in server,
- npx knex seed:make movies
- update seed files how you want
- npx knex seed:run

In other terminal,
- \dt
- select * from movies;
- should see all seeded data in the table movies within the database movie_list

Now, in src/app.js, add all get, post, patch, delete fxns 
- remember to npm install cors in server

In package.json in the server,
- make sure scripts look like this: 
```
"scripts": {
    "start": "nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
- also make sure you npm install nodemon
- npm start