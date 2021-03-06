const mongoose = require('mongoose');

const commentsSchema= new mongoose.Schema({
  text: {type: String, required: true},
  rating: {type: Number, required: true},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});


const hamburgerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restaurant: { type: mongoose.Schema.ObjectId, ref: 'Restaurant' },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  approved: { type: Boolean, default: false },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [commentsSchema]
});

module.exports = mongoose.model('Hamburger', hamburgerSchema);
