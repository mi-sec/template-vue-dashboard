export default {
	setDarkMode( state ) {
		state.darkMode = !state.darkMode;
	},
	toggleSidebar( state ) {
		state.sidebarModel = !state.sidebarModel;
	}
};
