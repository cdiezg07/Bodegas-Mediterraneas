<template>
  <v-main>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <!---->
      <div v-if="$store.getters.logueado">
        <v-card class="ma-4 ml-7" width="200">
          <div class="d-flex justify-center">
            <v-avatar size="130">
              <v-img src="https://thispersondoesnotexist.com/image"></v-img>
            </v-avatar>
          </div>
          <div class="pl-7">
            <div><h1>Rodrigo</h1></div>
            <div><h2>López Suarez</h2></div>
          </div>
        </v-card>
        <v-divider></v-divider>
        <v-list>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.ruta"
              @click="drawer = false"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div v-if="!$store.getters.logueado">
        <v-card v-if="!$store.getters.logueado" flat class="ma-4">
          <h3 class="font-weight-light grey lighten-2 pa-2">
            Inicia sesión para acceder a tu perfil y ver tus compras
          </h3>
        </v-card>
        <v-divider></v-divider>

        <v-list v-if="!$store.getters.logueado">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item router to="/" @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-liquor</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Bodegas</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar app height="80">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-card flat color="transparent" router to="/">
          <!--<h1 class="font-weight-light">Phone REC·</h1>-->
          <v-img src="../assets/Recurso6.png" width="550"> </v-img>
        </v-card>
      </v-toolbar-title>

      <div class="pt-6 pl-16">
        <v-autocomplete
          filled
          rounded
          dense
          append-icon="mdi-magnify"
          label="Buscar"
          :items="itemsBusqueda"
          v-model="resBusqueda"
        ></v-autocomplete>
      </div>

      <v-btn
        v-if="$store.getters.logueado"
        color="primary"
        @click="
          changeStateLogueado();
          resetCurrentUser();
        "
        absolute
        right
        router
        to="/"
      >
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.getters.logueado"
        absolute
        right
        color="primary"
        router
        to="/Login"
      >
        <span>LogIn</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!--  -->
  </v-main>
</template>

<script>
//import store from "../store";
export default {
  data: () => ({
    selectedItem: null,
    drawer: false,
    
    items: [
      {
        text: "Mi perfil",
        icon: "mdi-account",
        ruta: "/MiPerfil",
      },
      { text: "Bodegas", icon: "mdi-liquor", ruta: "/" },
      { text: "Cesta", icon: "mdi-cart", ruta: "/Cesta" },
    ],

    itemsBusqueda: [
      { text: "vinito" },
      { text: "jamon" },
      { text: "queso" },
      { text: "vinito1" },
      { text: "jamon1" },
      { text: "queso1" },
      { text: "vinito2" },
      { text: "jamon2" },
      { text: "queso2" },
      { text: "vinito3" },
      { text: "jamon3" },
      { text: "queso3" },
      
    ],
    resBusqueda: null,
  }),
  computed: {},
  methods: {
    changeStateLogueado() {
      console.log("metodo de navbar");
      this.$store.dispatch("changeStateLogueadoAction");
    },
    resetCurrentUser() {
      console.log("Current user reseteado");
      this.$store.dispatch("setCurrentUserAction", null);
    },
  },
};
</script>
