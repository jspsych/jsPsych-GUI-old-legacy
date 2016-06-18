var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import Main from 'Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var store = require('configureStore').configure();
store.subscribe(() => {
  console.log('New state: ', store.getState());
});

// App css
require('style!css!sass!applicationStyles');

const setMuiTheme = getMuiTheme(lightBaseTheme);

var mainApp = () => {
	return (
		<div>
			<MuiThemeProvider muiTheme={setMuiTheme}>
				<Provider store={store}>
					<Main/>
				</Provider>
			</MuiThemeProvider>
		</div>
	);
};

ReactDOM.render(
  mainApp(),
  document.getElementById('app')
);
