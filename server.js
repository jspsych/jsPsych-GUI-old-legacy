var express = require('express');
var jsPsych_Path = __dirname + '/public/jspsych-latest/jspsych.js';
var fs = require('fs');
// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

var all_plugin_parameters = [];
var all_plugin_parameters_index = 0;	

addPluginParameters = (obj) => {
	all_plugin_parameters[all_plugin_parameters_index] = obj;
	all_plugin_parameters_index += 1;
};

app.get('/plugin_data', function(req,res) {

	var jspsych_file = fs.readFileSync(jsPsych_Path).toString();
	eval(jspsych_file);

	var plugins_path = __dirname + "/public/jspsych-latest/plugins/";

	all_plugin_parameters = [];
  	all_plugin_parameters_index = 0;

	fs.readdir(plugins_path, function(err, items) {
		if(err) {
			throw err;
		}

		for (var i=0; i<items.length; i++) {
			var file_type_index = items[i].indexOf(".");
	        var file_type = items[i].substring(file_type_index+1);
	        if(file_type == "js") {
	        	var file_name_start = items[i].indexOf("-") + 1;
	        	var file_name_end = items[i].indexOf(".");
	        	var file_name = items[i].substring(file_name_start,file_name_end);
				console.log(file_name);
				var file_path = plugins_path + items[i];
				var file_data = fs.readFileSync(file_path).toString();
				eval(file_data);
				var temp_plugin_obj = jsPsych.plugins[file_name];
				addPluginParameters(temp_plugin_obj.info);
			}
		}
		res.send(all_plugin_parameters);
		console.log("Sent");
	});
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
