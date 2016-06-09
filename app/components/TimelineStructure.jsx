var React = require('react');
import {Component, PropTypes} from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
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
<Paper className={stylePaperClass} zDepth={1}>
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
		<FloatingActionButton className={styleFABClass}>
	      <ContentAdd />
	    </FloatingActionButton>
	</div>
</Paper>
);

// export default ListExampleSelectable;

// import {List, ListItem, ListItemContent, ListItemAction, Checkbox} from 'react-mdl';
// import {Grid, Cell} from 'react-mdl';
// import {FABButton, Icon} from 'react-mdl';

// var TimelineStructure = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<List>
// 					<ListItem>
// 					    <ListItemContent avatar="person">Trial 1</ListItemContent>
// 					    <ListItemAction>
// 					      <Checkbox defaultChecked />
// 					    </ListItemAction>
// 					</ListItem>
// 					<ListItem>
// 					    <ListItemContent avatar="person">Trial 2</ListItemContent>
// 					    <ListItemAction>
// 					      <Checkbox defaultChecked />
// 					    </ListItemAction>
// 					</ListItem>
// 					<ListItem>
// 					    <ListItemContent avatar="person">Trial 3</ListItemContent>
// 					    <ListItemAction>
// 					      <Checkbox defaultChecked />
// 					    </ListItemAction>
// 					</ListItem>
// 				</List>
// 				<div>
// 					<Grid>
// 						<Cell col={6} style={{position: 'absolute', bottom: '0', left: '100px'}}>
// 							<FABButton colored ripple>
// 				    			<Icon name="add" />
// 							</FABButton>
// 						</Cell>
// 						<Cell col={6} style={{position: 'absolute', bottom: '0', left:'300px'}}>
// 							<FABButton colored ripple>
// 				    			<Icon name="delete" />
// 							</FABButton>
// 						</Cell>
// 					</Grid>
// 				</div>
// 			</div>
// 		);
// 	}
// });

module.exports = TimelineStructure;