import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logueado: false,
    currentItem: null,
    currentUser: null,
  },
  mutations: {
    changeStateLogueado(state) {
      state.logueado = !state.logueado;
      console.log("Estado logueado", state.logueado);
    },
    setStateLogueado(state, data) {
      state.logueado = data;
      console.log("Estado logueado", state.logueado);
    },
    setCurrentItem(state, data) {
      state.currentItem = data;
      console.log("current Item", state.currentItem);
    },
    setCurrentUser(state, data) {
      console.log(data);
      state.currentUser = data;
      console.log("Current usuario", state.currentUser.nombre);
    },
  },
  actions: {
    //llamamos con el dispatch
    changeStateLogueadoAction(context) {
      context.commit("changeStateLogueado");
    },
    setStateLogueadoAction(context, data) {
      context.commit("setStateLogueado", data);
    },
    setCurrentItemAction(context, data) {
      context.commit("setCurrentItem", data); //a mutations
    },
    setCurrentUserAction(context, data) {
      context.commit("setCurrentUser", data);
    },
    /*updateCollectionAction(context, coleccionActualizada){

      context.commit("updateCollection", coleccionActualizada);
    },
*/
  },
  getters: {
    logueado(state) {
      return state.logueado;
    },
    currentItem(state) {
      return state.currentItem;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  modules: {},
});
