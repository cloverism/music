import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  // mutation -> changing / updating the state
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {},
  modules: {},
});
