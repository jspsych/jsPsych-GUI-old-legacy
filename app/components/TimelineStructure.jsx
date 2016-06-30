var React = require('react');
import {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import classnames from 'classnames';
var {connect} = require('react-redux');
var {setClickedTimelineItem} = require('actions');
var actions = require('actions');
import TimelineData from 'TimelineData';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

var stylePaperClass = classnames('stylePaper');
var styleFABClass = classnames('styleFAB');
var timelineStructure = [];

const mapStateToProps = (state) => {
  if(state.timelineStructure != null) {
    timelineStructure = state.timelineStructure;
    console.log("In timeline structure...",timelineStructure);
    return {
      state
    }
  }
};

var valueCount = 0;
var clickedItem = "";

const paperStyle = {
  height: window.innerHeight*0.9
};

var TimelineStructure = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      trial_name: ""
    }
  },
  handleTouchTap: function(event) {
    var event_data = event;
    console.log(event);
    console.log(event_data.target);
    console.log(event_data.target.innerHTML);
    var trial_name = event_data.target.innerHTML;
    if(trial_name != this.state.trial_name) {
      this.setState({open: !this.state.open, trial_name: trial_name});  
      this.setState({open: !this.state.open});
    }
    var {dispatch} = this.props;
    // dispatch(setClickedTimelineItem(name));
  },
  closeDrawer: function(event) {
    console.log("In close drawer");
    this.setState({open: false});
  },
  render: function() {
    var self = this;
    var {trial_name} = this.state;
    return(
      <div>
      <Paper className="stylePaper" style={paperStyle} zDepth={1}>
        <SelectableList defaultValue={1}>
          <Subheader>Experiment Timeline</Subheader>
          {timelineStructure.map( function(item) {
            valueCount = valueCount + 1;
            return (
              <ListItem 
                primaryText={item.name} 
                value={valueCount} 
                leftAvatar={<Avatar>T</Avatar>} 
                onTouchTap={self.handleTouchTap} 
                key={valueCount}/>
              )
            })   
          }
        </SelectableList>
        <FloatingActionButton className="styleFAB">
          <ContentAdd />
        </FloatingActionButton>
      </Paper>
      <Drawer width={500} openSecondary={true} open={this.state.open} >
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconButton onTouchTap={this.closeDrawer} tooltip="Close"><NavigationClose /></IconButton>
            <ToolbarTitle text={trial_name}/>
          </ToolbarGroup>
        </Toolbar>
        <br/>
        <TimelineData/>
      </Drawer>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(TimelineStructure);