export var pluginDetailsReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_PLUGIN_DETAILS':
			return action.pluginDetails;
		default:
			return state;
	}
};

export var handleTimelineStructureReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_TIMELINE_STRUCTURE':
			return action.timelineStructure;
		default:
			return state;
	}
};

export var setTimelineItem = (state = [], action) => {
	switch(action.type) {
		case 'SET_CLICKED_TIMELINE_ITEM':
			return action.timelineItem;
		default:
			return state;
	}
};