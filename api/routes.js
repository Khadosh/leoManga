'use strict';

const express = require('express');
const router = express.Router();
const Manga = require('./models/manga');
require('mongoose').Promise = global.Promise;

// middleware to use for all requests
router.use((req, res, next) => {
    console.log('Request received');
    next(); 
});

// test route to make sure everything is working (accessed at GET http://localhost:8085/api)
router.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }));

//Real Routes
router.route('/mangas')
  .post((req, res) => {
    const manga = new Manga();
    manga.name = req.body.name; 
    manga.save()
      .then(() => res.send('manga created'))
      .catch(err => res.send(err));
  })
  .get((req, res) => {
    Manga.find()
      .then(mangas => res.json(mangas))
      .catch(err => res.send(err));
  });

  router.route('/manga/:manga_id')
  .get(function(req, res){
    Manga.findById(req.params.manga_id, function(err, manga) { err ? res.send(err) : res.json(manga); });
  })
  .put(function(req, res){
    Manga.findById(req.params.manga_id, function(err, manga){
      if (err) res.send(err);
      manga.name = req.body.name;
      manga.save(function(err) { err ? res.send(err) : res.json({ message: 'Manga Updated!' }); });
    });
  })
  .delete(function(req, res){
    Manga.remove({
      _id: req.params.manga_id
    }, function(err){
      err ? res.send(err) : res.json({message: 'Manga deleted'});
    });
  });


    
  module.exports = router;