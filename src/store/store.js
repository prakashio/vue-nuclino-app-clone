import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isToggleMainSidebar: false,
		isSidebarHide: false,
		isContentHide: false,
		sidebarWidth: 17,
		contentWidth: 83,
		isDialogShow: false,
		activeSidebarSection: 'list'
	},
	getters: {
		isTiggleMainSidebar: state => {
			return state.isToggleMainSidebar;
		},
		isSidebarHide: state => {
			return state.isSidebarHide;
		},
		isContentHide: state => {
			return state.isContentHide;
		},
		sidebarWidth: state => {
			return state.sidebarWidth;
		},
		contentWidth: state => {
			return state.contentWidth;
		},
		isDialogShow: state => {
			return state.isDialogShow;
		},
		activeSidebarSection: state => {
			return state.activeSidebarSection;
		}
	},
	mutations: {
		toggleMainSidebar: state => {
			state.isToggleMainSidebar = !state.isToggleMainSidebar;
		},
		sidebarResizeFull: state => {
			if (state.sidebarWidth == 100) {
				state.contentWidth = 83;
				state.sidebarWidth = 17;
				state.isContentHide = false;
			} else {
				state.sidebarWidth = 100;
				state.contentWidth = 0;
				state.isContentHide = true;
			}
		},
		sidebarResizeNormal: state => {
			if (state.sidebarWidth == 17) {
				state.isSidebarHide = true;
				state.contentWidth = 100;
				state.sidebarWidth = 0;
			} else {
				state.contentWidth = 83;
				state.sidebarWidth = 17;
				state.isContentHide = false;
				state.isSidebarHide = false;
			}
		},
		changeSidebarActive: (state, activeName) => {
			if (activeName == 'graph') {
				state.contentWidth = 50;
				state.sidebarWidth = 50;
			} else {
				state.sidebarWidth = 17;
				state.contentWidth = 83;
			}
			state.activeSidebarSection = activeName;
		},
		showDialog: (state, name) => {
			state.isDialogShow = true;
		},
		closeDialog: (state) => {
			state.isDialogShow = false;
		}
	},
	actions: {

	}
});
