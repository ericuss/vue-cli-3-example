import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
  state,
  mutations,
  actions,
  getters,
});

store.dispatch('validateToken');

export default store;
