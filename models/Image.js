const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  username: { type: String, ref: 'User', required: true },
  favorite: { type: Boolean, default: false },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
