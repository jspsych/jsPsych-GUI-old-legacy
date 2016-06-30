export var setPluginDetails = (pluginDetails) => {
	return {
		type: 'SET_PLUGIN_DETAILS',
		pluginDetails
	};
};

export var setTimelineStructure = (timelineStructure) => {
	return {
		type: 'SET_TIMELINE_STRUCTURE',
		timelineStructure
	};
};

export var setClickedTimelineItem = (timelineItem) => {
	return {
		type: 'SET_CLICKED_TIMELINE_ITEM',
		timelineItem
	}
}