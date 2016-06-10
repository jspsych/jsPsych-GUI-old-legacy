var React = require('react');
import MainNavBar from 'MainNavBar';
import TimelineStructure from 'TimelineStructure';
import TimelineData from 'TimelineData';
const {Grid, Row, Col} = require('react-flexbox-grid');

var Main = React.createClass({
	componentWillMount: function() {
		$.get('/plugin_data',function(all_plugin_parameters){
	      console.log("Getting Plugin Data...",all_plugin_parameters);
	    }.bind(this));
	},
	render: function() {
		return (
			<div>
				<div>
					<MainNavBar/>
				</div>
				<Grid>
				  <Row>
					<Col md={4}>
						<TimelineStructure/>
					</Col>
					<Col md={8}>
						<TimelineData/>
					</Col>	
				  </Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Main;