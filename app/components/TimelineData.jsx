var React = require('react');
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import classnames from 'classnames';
var {connect} = require('react-redux');

let toggleClassBlock = classnames('toggle-styles-block');
let toggleClassToggle = classnames('toggle-styles-toggle');
const items = [];

const mapStateToProps = (state) => {
	console.log("State in timeline data...",state);
	if(state.pluginDetails != null) {
		var plugin_parameters = state.pluginDetails;
		for (let i = 0; i < plugin_parameters.length; i++ ) {
			var plugin = plugin_parameters[i];
			items.push(<MenuItem value={i} key={i} primaryText={plugin.info.name} />);
		}
		return {
			state
		}
	} else {
		return state
	}
}

var TimelineData = React.createClass({
	getInitialState: function() {
		return {
			value: null
		}
	},
	handleChange : function(event, index, value) {
		this.setState({value});
	},
	render: function() {
		return (
			<div>
				<div className="toggle-styles-block">
					<Toggle
				      label="Timeline / Trial"
				      defaultToggled={true}
				      className="toggle-styles-toggle"
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
			</div>
		);
	}
});

module.exports = connect(mapStateToProps)(TimelineData);