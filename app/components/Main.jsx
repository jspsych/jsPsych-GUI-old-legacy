var React = require('react');
import MainNavBar from 'MainNavBar';
import TimelineStructure from 'TimelineStructure';
import TimelineData from 'TimelineData';
const {Grid, Cell} = require('react-flexr');
var {setPluginDetails, setTimelineStructure} = require('actions');
var {connect} = require('react-redux');
var actions = require('actions');
import 'react-flexr/styles.css';


const mainStyle = {
	width: window.innerWidth/4
}

var Main = React.createClass({
	componentWillMount: function() {
		var {dispatch} = this.props;
		$.get('/plugin_data',(all_plugin_parameters) => {
	      	console.log("Received Plugin Parameters...",all_plugin_parameters);
	      	dispatch(actions.setPluginDetails(all_plugin_parameters));
	    });

	    //Set Initial Timeline Structure
	    var timelineStructure = [
	    	{
	    		name : "Trial1",
	    		children : [],
	    		type: "trial",
	    		pluginType: "",
	    		pluginData: {}
	    	},
	    	{
	    		name : "Trial2",
	    		children : [],
	    		type: "trial",
	    		pluginType: "",
	    		pluginData: {}
	    	},
	    	{
	    		name : "Trial3",
	    		children : [],
	    		type: "trial",
	    		pluginType: "",
	    		pluginData: {}
	    	}
	    ];

	    dispatch(actions.setTimelineStructure(timelineStructure));
	    
	},
	render: function() {
		return (
			<div>
				<MainNavBar/>
				<div style={mainStyle}>		
					<TimelineStructure/>
				</div>
			</div>
		);
	}
});

module.exports = connect()(Main);