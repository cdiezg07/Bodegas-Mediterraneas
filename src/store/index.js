import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logueado: false,
    currentLenguaje: "es",
    currentUser: null,
    darkMode: false,
  },
  mutations: {
    changeStateDarkMode(state) {
      state.darkMode = !state.darkMode;
      console.log("Modo darkMode", state.darkMode);
    },
    changeStateLogueado(state) {
      state.logueado = !state.logueado;
      console.log("Estado logueado", state.logueado);
    },
    setStateLogueado(state, data) {
      state.logueado = data;
      console.log("Estado logueado", state.logueado);
    },
    setCurrentLenguaje(state, data) {
      state.currentLenguaje = data;
      console.log("current lenguaje", state.currentLenguaje);
    },
    setCurrentUser(state, data) {
      console.log(data);
      state.currentUser = data;
      console.log("Current usuario", state.currentUser.nombre);
    },
  },
  actions: {
    //llamamos con el dispatch
    changeStateDarkModeAction(context) {
      context.commit("changeStateDarkMode");
    },
    changeStateLogueadoAction(context) {
      context.commit("changeStateLogueado");
    },
    setStateLogueadoAction(context, data) {
      context.commit("setStateLogueado", data);
    },
    setCurrentLenguajeAction(context, data) {
      context.commit("setCurrentLenguaje", data); //a mutations
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
    darkMode(state) {
      return state.darkMode;
    },
    logueado(state) {
      return state.logueado;
    },
    currentLenguaje(state) {
      return state.currentLenguaje;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  modules: {},
});
