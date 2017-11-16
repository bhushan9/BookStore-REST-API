
const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
} 

// Add Genre
module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
}

// Get list of books with matching genre
module.exports.getBooks = (Name, callback) =>{
	console.log("inside "+ Name)
	Book.find({ genre: Name}, callback);
}
// Update Genre
module.exports.updateGenre = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}