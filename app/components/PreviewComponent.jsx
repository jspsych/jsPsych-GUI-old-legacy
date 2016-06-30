var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Play from 'material-ui/svg-icons/av/play-circle-outline';

const paperStyle = {
	height: window.innerHeight*0.7,
	width: window.innerWidth*0.7
};

const previewButtonStyle = {
	height: window.innerHeight*0.05,
	width: window.innerHeight*0.05,
}

const alignCenter = {
	textAlign: "center"
}

var PreviewComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h3 style={alignCenter}>Display name of selected component - trial/timeline/experiment</h3>
				<Paper style={paperStyle} zDepth={2}>
				</Paper>
				<div style={alignCenter}>
					<IconButton tooltip="Preview" iconStyle={previewButtonStyle}><Play/></IconButton>
				</div>
			</div>
		);
	}
});

module.exports = connect()(PreviewComponent);