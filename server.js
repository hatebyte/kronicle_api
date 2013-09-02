var express 	= require('express'),
	path  		= require('path'),
	mongoose 	= require('mongoose');

mongoose.connect('mongodb://localhost/testkrons_database');

var Step = new mongoose.Schema({
	title			: String,
	description		: String,
	imageUrl		: String,
	dialImageUrl	: String,
	parentKronicle	: String,
	time			: Number,
	indexInKronicle : Number
});

var Kronicle = new mongoose.Schema({
	title			: String,
	description		: String,
	category		: String,
	imageUrl		: String,
	totalTime		: Number,
	timesCompleted	: Number,
	active			: Boolean,
	items			: Array,
	steps			: [Step]
})

StepModel = mongoose.model('Step', Step);
KronicleModel = mongoose.model('Kronicle', Kronicle);


var app = express();

app.configure(function() {
	app.use(express.bodyParser() );
	app.use(express.methodOverride() );
	app.use(app.router);
	app.use(express.static(path.join(__dirname, "public")));
});


app.configure("development", function() {
	app.use(express.errorHandler({ dummpExceptions:true, showStack:true }));
	//app.use('/user', user);
	app.use('/kronicles', require('./node_modules/kronicle/kronicles'));
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(4711, function() {
	console.log("Express server listening on port");
});

