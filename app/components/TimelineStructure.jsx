var React = require('react');
import {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import classnames from 'classnames';

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

const TimelineStructure = () => (
<Paper className="stylePaper" zDepth={1}>
    <SelectableList defaultValue={3}>
      <Subheader>Experiment Timeline</Subheader>
      <ListItem
        value={1}
        primaryText="Trial 1"
        leftAvatar={<Avatar>T</Avatar>}
        nestedItems={[
          <ListItem
            value={2}
            primaryText="Nested Trial 1"
            leftAvatar={<Avatar>T</Avatar>}
          />,
        ]}
      />
      <ListItem
        value={3}
        primaryText="Trial 2"
        leftAvatar={<Avatar>T</Avatar>}
      />
      <ListItem
        value={4}
        primaryText="Trial 3"
        leftAvatar={<Avatar>T</Avatar>}
      />
      <ListItem
        value={5}
        primaryText="Trial 4"
        leftAvatar={<Avatar>T</Avatar>}
      />
    </SelectableList>
    <div>
		<FloatingActionButton className="styleFAB">
	      <ContentAdd />
	    </FloatingActionButton>
	</div>
</Paper>
);

module.exports = TimelineStructure;