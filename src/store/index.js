import { http } from './../services';
import { baseURL } from '../constants';

const state = {
  results: {}
}

const actions = {
  async searchWords ({ commit }, query) {
    const response = await http.get(`${baseURL}/search/en?q=${query}&prefix=false`);
    commit('search', response);
  }
}

const mutations = {
  search (state, payload) {
    state.results = payload
  }
}

export default {
    actions,
    mutations,
    state
}