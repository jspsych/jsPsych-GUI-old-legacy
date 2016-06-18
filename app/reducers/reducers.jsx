export var pluginDetailsReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_PLUGIN_DETAILS':
			return action.pluginDetails;
		default:
			return state;
	}
};