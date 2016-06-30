var redux = require('redux');
var {pluginDetailsReducer,handleTimelineStructureReducer, setTimelineItem} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    pluginDetails: pluginDetailsReducer,
    timelineStructure: handleTimelineStructureReducer,
    selectedTimelineItem: setTimelineItem
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};