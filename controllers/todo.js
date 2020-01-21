const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const todo_api_keys = require('./todo_api_keys');
const mongoDbUrl = todo_api_keys.mongoDbUrl;

// Connect to the database
mongoose.connect(mongoDbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Create a schema - blueprint
const todoSchema = new mongoose.Schema({ item: String });

const Todo = mongoose.model('Todo', todoSchema);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
	app.get('/', (req, res) => {
		// Get data from MongoDB and pass it to view
		Todo.find({}, (err, data) => {
			if (err) throw err;
			res.render('todo', { todos: data });
		});
	});
	app.post('/todo', urlencodedParser, (req, res) => {
		// Get data from the view and add it to MongoDB
		const newTodo = Todo(req.body).save((err, data) => {
			if (err) throw err;
			res.json({ todos: data });
		});
	});
	app.delete('/todo/:item', (req, res) => {
		// Delete the item from MongoDB
		Todo.find({ item: req.params.item.replace(/\-/g, ' ') }).deleteOne(
			(err, data) => {
				if (err) throw err;
				res.json(data);
			}
		);
	});
};
