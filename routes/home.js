// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var random_num = Math.random();

	if(random_num > 0.5){
    	res.render("home", data);
    }else{
    	res.render("althome", data)
  }
	res.render('home', data);
};