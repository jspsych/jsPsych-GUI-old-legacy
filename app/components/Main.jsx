var React = require('react');
import MainNavBar from 'MainNavBar';
import TimelineStructure from 'TimelineStructure';
import TimelineData from 'TimelineData';
const {Grid, Row, Cell} = require('react-inline-grid');
var {setPluginDetails} = require('actions');
var {connect} = require('react-redux');
var actions = require('actions');

var Main = React.createClass({
	componentWillMount: function() {
		var {dispatch} = this.props;
		$.get('/plugin_data',(all_plugin_parameters) => {
	      	console.log("Received Plugin Parameters...",all_plugin_parameters);
	      	dispatch(actions.setPluginDetails(all_plugin_parameters));
	    });
	},
	render: function() {
		return (
			<div>
				<MainNavBar/>
				<Grid>
				  <Row>
					<Cell is="3">
						<TimelineStructure/>
					</Cell>
					<Cell is="9">
						<TimelineData/>
					</Cell>	
				  </Row>
				</Grid>
			</div>
		);
	}
});

module.exports = connect()(Main);