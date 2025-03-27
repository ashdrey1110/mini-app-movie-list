const express = require('express');
const app = express();
const PORT = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('Your knex and express app are running successfully');

})

app.get('/', (request, response) => {
    response.send('Application up and running')
})


app.get('/movies', (req, res) => {
    knex('movies')
        .select('*')
        .then((movies) => res.status(200).json(movies))
        // or if i only want to see the titles i could do this:
        // .then(movies => {
        //     var movieTitles = movies.map(movie => movie.title);
        //     response.json(movieTitles);
        // })
        .catch(err => // can also use .catch()
            res.status(404).json({
                message:
                    'The movie data is not available'
            })
        );
})

app.get('/movies/:id', (req, res) => {
    let id = req.params.id;
    knex('movies')
        .select('*')
        .where("id", id)
        // .then(movies => {
        //     var movieTitles = movies.map(movie => movie.title);
        //     res.json(movieTitles);
        // })
        // or i could just do this: 
        .then((movies) => res.status(200).json(movies))
        .catch(err => // can also use .catch()
            res.status(404).json({
                message:
                    'The movie data is not available'
            })
        );
})


app.post('/movies', (req, res) => {
    const { title } = req.body;
    knex("movies")
        .insert({ title })
        .returning('id')
        .then(() => {
			res.status(201).json({
				message: `Movie added successfully`,
			});
		})
		.catch((err) => res.status(500).json({ error: err.message }));
});

app.patch("/movies/:id", (req, res) => {
    let id = req.params.id;
	const { title } = req.body;
	knex("movies")
		.where("id", id)
		.update({ title })
		.then((count) => {
			if (count > 0) {
				res.status(200).json({
					message: `Title with ID ${id} updated successfully`,
				});
			} else {
				res.status(404).json({ error: "Title not found" });
			}
		})
		.catch((err) => res.status(500).json({ error: err.message }));
});

app.delete("/movies/:id", (req, res) => {
    const { id } = req.params;
    knex("movies")
    .where({ id }).del()
    .then(() => {
        res.status(201).json({
            message: "Movie removed successfully"
        });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});
