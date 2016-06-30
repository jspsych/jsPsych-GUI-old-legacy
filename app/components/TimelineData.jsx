var React = require('react');
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import classnames from 'classnames';
import PluginParameterForm from 'PluginParameterForm';
var {connect} = require('react-redux');
// import {toggleStylesBlock,toggleStylesToggle} from 'applicationStyles';

let toggleClassBlock = classnames('toggle-styles-block');
let toggleClassToggle = classnames('toggle-styles-toggle');
const items = [];

const mapStateToProps = (state) => {
	console.log("State in timeline data...",state);
	if(state.pluginDetails != null) {
		var plugin_parameters = state.pluginDetails;
		for (let i = 0; i < plugin_parameters.length; i++ ) {
			var plugin = plugin_parameters[i];
			items.push(<MenuItem value={plugin.info.name} key={i} primaryText={plugin.info.name} />);
		}
		return {
			state
		}
	} else {
		return {
			state
		}
	}
};

const alignCenter = {
	textAlign: "center"
};

const toggleStylesBlock = {
   maxWidth: 400
};

const toggleStylesToggle = {
  marginBottom: 16
};

var TimelineData = React.createClass({
	getInitialState: function() {
		return {
			value: null,
			currentTrialType: []
		}
	},
	handleChange : function(event, index, value) {
		console.log(value);
		var {pluginDetails} = this.props.state;
		var currentTrialType = [];
		var value_plugin_parameters = [];
		for(var i=0; i<pluginDetails.length; i++) {
			if(pluginDetails[i].info.name == value) {
				currentTrialType = pluginDetails[i].parameters;
				break;
			}
		}
		this.setState({value:value, currentTrialType:currentTrialType});
	},
	render: function() {
		return (
			<div style={alignCenter}>
				<div style={toggleStylesBlock}>
					<Toggle
				      label="Timeline / Trial"
				      defaultToggled={true}
				      style={toggleStylesToggle}
				    />
				</div>
				<div>
					<SelectField
			          value={this.state.value}
			          onChange={this.handleChange}
			          maxHeight={300}
			          floatingLabelText="Trial Type"
			        >
			          {items}
			        </SelectField>
				</div>
				<br/>
				<PluginParameterForm currentTrialType={this.state.currentTrialType}/>
			</div>
		);
	}
});

module.exports = connect(mapStateToProps)(TimelineData);