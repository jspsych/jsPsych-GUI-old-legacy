var React = require('react');
import MainNavBar from 'MainNavBar';
import TimelineStructure from 'TimelineStructure';
import TimelineData from 'TimelineData';
import PreviewComponent from 'PreviewComponent';
const {Grid, Cell} = require('react-flexr');
var {setPluginDetails, setTimelineStructure} = require('actions');
var {connect} = require('react-redux');
var actions = require('actions');

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
				<table>
					<tbody>
					  <tr>
						<td>
							<div style={mainStyle}>		
								<TimelineStructure/>
							</div>
						</td>
						<td>
							<PreviewComponent/>
						</td>
					  </tr>
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = connect()(Main);