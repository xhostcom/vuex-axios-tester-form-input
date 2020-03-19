import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async loadPosts({ commit }) {
      let value = event.target.value;
      let url = "https://jsonplaceholder.typicode.com/" + value;
      await axios
        .get(url, { headers: { "x-dsi-restful": 1 } })
        .then(data => {
          console.log(data.data);
          let posts = data.data;
          commit("SET_POSTS", posts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
});
