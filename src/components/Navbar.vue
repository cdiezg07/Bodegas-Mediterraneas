<template>
  <v-main>
    <v-navigation-drawer
      v-if="!$store.getters.darkMode"
      v-model="drawer"
      class="rounded-lg"
      app
      style="
        background: #dedede;
        box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
      "
    >
      <!---->
      <div v-if="$store.getters.logueado">
        <v-card
          class="ma-4 ml-7"
          width="200"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <div class="d-flex justify-center pa-2">
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
              class="custom_button my-4"
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
        <v-card
          v-if="!$store.getters.logueado"
          class="ma-4"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <h3 class="font-weight-light grey lighten-2 pa-2">
            Inicia sesión para acceder a tu perfil y ver tus compras
          </h3>
        </v-card>
        <v-divider></v-divider>

        <v-list v-if="!$store.getters.logueado">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              router
              to="/"
              @click="drawer = false"
              class="custom_button"
            >
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
    <v-navigation-drawer
      v-if="$store.getters.darkMode"
      v-model="drawer"
      class="rounded-lg"
      app
      style="
        background: #292929;
        box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
      "
    >
      <!---->
      <div v-if="$store.getters.logueado">
        <v-card
          class="ma-4 ml-7"
          width="200"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <div class="d-flex justify-center pa-2">
            <v-avatar size="130">
              <v-img src="https://thispersondoesnotexist.com/image"></v-img>
            </v-avatar>
          </div>
          <div class="pl-7 grey--text">
            <div><h1>Pedro</h1></div>
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
              class="custom_buttonb my-4 grey--text text--lighten-1"
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
        <v-card
          v-if="!$store.getters.logueado"
          class="ma-4"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <h3 class="font-weight-light pa-2 grey--text text--lighten-2">
            Inicia sesión para acceder a tu perfil y ver tus compras
          </h3>
        </v-card>
        <v-divider></v-divider>

        <v-list v-if="!$store.getters.logueado">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              router
              to="/"
              @click="drawer = false"
              class="custom_buttonb"
            >
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

    <v-app-bar
      v-if="!$store.getters.darkMode"
      style="
        box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
      "
      app
      height="80"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-card flat color="transparent" router to="/">
          <v-img src="../assets/Recurso6.png" width="550"> </v-img>
        </v-card>
      </v-toolbar-title>

      <div class="pt-2 pl-16">
        <v-autocomplete
          filled
          rounded
          dense
          append-icon="mdi-magnify"
          label="Buscar"
          :items="itemsBusqueda"
          v-model="resBusqueda"
          style="
            height: 50px;
            background: #dbdbdb;
            box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
          "
        ></v-autocomplete>
      </div>
      <v-spacer></v-spacer>
      <div class="mr-16">
        <div class="mr-4">
          <v-row class="mr-16">
            <v-icon color="yellow darken-3" large class="ma-1"
              >mdi-white-balance-sunny</v-icon
            >
            <v-switch @change="cambiarModo()" class="mt-5" inset> </v-switch>
            <v-icon color="grey darken-2">mdi-weather-night</v-icon>
          </v-row>
        </div>
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
        text
        router
        to="/"
        class="custom_button"
      >
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.getters.logueado"
        absolute
        right
        color="primary"
        text
        router
        to="/Login"
        class="custom_button"
      >
        <span>LogIn</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar
      v-if="$store.getters.darkMode"
      color="grey darken-3"
      app
      height="80"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-card flat color="transparent" router to="/">
          <v-img src="../assets/Recurso6dark.png" width="550"> </v-img>
        </v-card>
      </v-toolbar-title>

      <div class="pt-2 pl-16">
        <v-autocomplete
          filled
          rounded
          dense
          dark
          append-icon="mdi-magnify"
          label="Buscar"
          :items="itemsBusqueda"
          v-model="resBusqueda"
          style="
            height: 50px;
            background: #292929;
            box-shadow: inset 4px 4px 12px #1a1a1a, inset -4px -4px 12px #383838;
          "
        ></v-autocomplete>
      </div>
      <v-spacer></v-spacer>
      <div class="mr-16">
        <div class="mr-4">
          <v-row class="mr-16">
            <v-icon color="grey darken-2" class="ma-1"
              >mdi-white-balance-sunny</v-icon
            >
            <v-switch @change="cambiarModo()" class="mt-5 pr-0" inset>
            </v-switch>
            <v-icon color="blue lighten-2" large>mdi-weather-night</v-icon>
          </v-row>
        </div>
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
        text
        router
        to="/"
        class="custom_buttonb"
      >
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.getters.logueado"
        absolute
        right
        color="primary"
        text
        router
        to="/Login"
        class="custom_buttonb"
      >
        <span>LogIn</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
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
      { text: "Bodegas Arzuaga Navarro" },
      { text: "Bodegas Regina Viarum" },
      { text: "Bodegas BAIGORRI" },
      { text: "Bodegas GRANBAZÁN" },
      { text: "Bodega Berroja" },
      { text: "Bodegas Luis Cañas" },
      { text: "ARZUAGA CRIANZA 2019" },
      { text: "LA PLANTA CRIANZA 2020" },
      { text: "ARZUAGA RESERVA 2018" },
      { text: "ARZUAGA RESERVA ESPECIAL" },
      { text: "ARZUAGA GRAN RESERVA 2015" },
      { text: "LADERAS DEL NORTE 2019" },
      { text: "GRAN ARZUAGA" },
      { text: "AMAYA ARZUAGA 2016" },
      { text: "FAN D'ORO 2019" },
      { text: "ARZUAGA ROSAE 2020" },
      { text: "PAGO FLORENTINO 2018" },
      { text: "PAGO MOTA 2020" },
      { text: "Taller de cata" },
      { text: "Sensaciones enológicas" },
      { text: "Descubriendo Arzuaga" },
      { text: "Naturaleza en directo" },
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
    cambiarModo() {
      this.$store.dispatch("changeStateDarkModeAction", null);
    },
  },
};
</script>
