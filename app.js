const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const games = require('./playstore');
const app = express();

app.use(morgan('common'));
app.use(cors());

app.get('/playstore', (req, res) => {
    const { genre, sort } = req.query;

    if (!genre && !sort) {
        return res.json(games);
    }

    let foundGames = games.filter(game => {
        if (game.Genres.toLowerCase().includes(genre.toLowerCase())) {
            return game;
        }
    });

    if (genre === 'select') {
      return res
      .status(400)
      .send('You cannot sort without picking a genre');
    }

    if (sort === "app") {
        foundGames
          .sort((a, b) => {
            return a.App.toLowerCase() > b.App.toLowerCase() ? 1 : a.App.toLowerCase() < b.App.toLowerCase() ? -1 : 0;
        });
      }

    if (sort === "rating") {
        foundGames
          .sort((a, b) => {
            return a.Rating > b.Rating ? -1 : a.Rating < b.Rating ? 1 : 0;
        });
    }

    res.json(foundGames);
})

module.exports = app;

app.listen(8000, () => {
    console.log('Server started on PORT 8000');
  });