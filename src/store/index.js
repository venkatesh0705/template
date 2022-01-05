import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
  },
  getters: {
    data(s) {
      return s.data;
    },
  },
  mutations: {
    INSERT_USER(state, data) {
      state.data.push(data);
    },
  },
  actions: {
    insert_user(context, user) {
      context.commit("INSERT_USER", user);
    },
  },
});
