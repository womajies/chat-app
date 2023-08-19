export default {
  state: () => ({
    activeDialogUser: null,
  }),

  getters: {
    getActiveDialogUser(state) {
      return state.activeDialogUser;
    },
  },

  mutations: {
    SET_ACTIVE_DIALOG_USER(state, user) {
      state.activeDialogUser = user;
    },
    SEND_MESSAGE(state, message) {
      state.activeDialogUser.chat.push(message);
    },
  },

  actions: {
    sendMessageToChat({ commit }, message) {
      commit('SEND_MESSAGE', message)
    },
  },
};
