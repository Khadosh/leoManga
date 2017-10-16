'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangaSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Manga', MangaSchema);