'use strict';

const express = require('express');
const router = express.Router();
const Manga = require('../models/manga');

router.route('/mangas')
  .post((req, res) => {
    const manga = new Manga();
    manga.name = req.body.name; 
    manga.save()
      .then(() => res.send(`"${manga.name}" created successfuly`))
      .catch(err => res.send(err));
  })
  .get((req, res) => {
    Manga.find()
      .then(mangas => res.json(mangas))
      .catch(err => res.send(err));
  });

  router.route('/mangas/:manga_id')
  .get((req, res) => Manga.findById(req.params.manga_id)
    .then(manga => res.json(manga))
    .catch(err => res.send(err)))
  .put((req, res) => Manga.findById(req.params.manga_id)
    .then(manga => {
      manga.name = req.body.name;
      manga.save()
        .then(res.json({ message: 'Manga Updated!' }))
        .catch(err => res.send(err));
    })
    .catch(err => res.send(err))
  )
  .delete((req, res) => Manga.remove({_id: req.params.manga_id}, err => err ? res.send(err) : res.json({message: 'Manga deleted'})));

module.exports = router;