var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
    var n = req.query.name;
    var d = req.query.description;
    var i = 'http://lorempixel.com/400/400/people';
    data["friends"].push({name: n, description: d, imageURL: i});
    res.render('add');
 
 }