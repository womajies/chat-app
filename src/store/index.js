import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat,
    user,
  }
});