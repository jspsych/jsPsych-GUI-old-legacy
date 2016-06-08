var React = require('react');
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const MainNavBar = () => (
  <AppBar
    title={<span><span style={{ color: '#ddd' }}>jsPsych GUI / </span><strong>Experiment Name</strong></span>}
    onTitleTouchTap={handleTouchTap}
    showMenuIconButton={false}
    iconElementRight={
         <FlatButton
           key={1}
           label="Save"/>
     }
  />
);

module.exports = MainNavBar;