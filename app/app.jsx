var React = require('react');
var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// App css
require('style!css!sass!applicationStyles')

const setMuiTheme = getMuiTheme(lightBaseTheme);

var mainApp = () => {
	return (
		<div>
			<MuiThemeProvider muiTheme={setMuiTheme}>
				<Main/>
			</MuiThemeProvider>
		</div>
	);
};

ReactDOM.render(
  mainApp(),
  document.getElementById('app')
);
