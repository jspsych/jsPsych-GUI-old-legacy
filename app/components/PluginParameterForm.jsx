var React = require('react');
var {connect} = require('react-redux');

var PluginParameterForm = React.createClass({
	render: function() {
		console.log(this.props.currentTrialType,"PluginParameterForm");
		return (
			<div>
				{this.props.currentTrialType.length}
			</div>
		);
	}
});


module.exports = connect()(PluginParameterForm);