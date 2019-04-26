import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isToggleMainSidebar: false,
    isSidebarHide: false,
    isContentHide: false,
    sidebarWidth: 15,
    contentWidth: 85,
    isDialogShow: false
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
    }
  },
  mutations: {
    toggleMainSidebar: state => {
      state.isToggleMainSidebar = !state.isToggleMainSidebar;
    },
    sidebarResizeFull: state => {
      state.sidebarWidth = 100;
      state.contentWidth = 0;
      state.isContentHide = true;
    },
    sidebarResizeNormal: state => {
      if (state.sidebarWidth == 15) {
        state.sidebarWidth = 0;
        state.contentWidth = 105;
        state.isSidebarHide = true;
      } else {
        state.sidebarWidth = 15;
        state.contentWidth = 85;
        state.isContentHide = false;
        state.isSidebarHide = false;
      }
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
