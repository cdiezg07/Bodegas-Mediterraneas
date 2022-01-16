<template>
  <v-app class="ma-0 pa-0">
    <div
      v-if="!$store.getters.darkMode"
      style="background: #d9d9d9"
      class="py-16"
    >
      <div class="py-16"></div>
      <div class="py-16">
        <v-card
          width="600"
          class="mx-auto mt-5"
          justify="center"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <v-card-title>
            <h1 class="font-weight-medium">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="name"
                label="Usuario"
                prepend-icon="mdi-account-circle"
                type="text"
              />
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>

          <v-alert id="error" type="error" v-show="visible"
            >El usuario y contraseña no son correctos</v-alert
          >

          <v-card-actions>
            <template>
              <div class="text-center">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-x
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      v-bind="attrs"
                      v-on="on"
                      class="text-decoration-underline"
                    >
                      Recuperar contraseña
                    </v-btn>

                    <v-btn right absolute class="custom_button" @click="login()"
                      >Login</v-btn
                    >
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >¿Cómo recuperar contraseña?</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >Para recuperar la contraseña, llama al numero
                            +666666666
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>
                  </v-card>
                </v-menu>
              </div>
            </template>
          </v-card-actions>
        </v-card>
        <v-spacer class="pt-2"></v-spacer>
        <v-card
          width="600"
          class="mx-auto"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <v-card-title
            style="font-size: 20px; padding-top: 15px; padding-left: 10px"
            >¿Aún no está registrado?
            <v-btn right absolute class="custom_button" route to="/Registro"
              >Registrarse</v-btn
            >
            <v-snackbar v-model="snackbar" :timeout="2000">
              Datos incorrectos
            </v-snackbar>
          </v-card-title>
        </v-card>
      </div>
      <div class="py-16"></div>
      <div class="py-8"></div>
    </div>
    <div
      v-if="$store.getters.darkMode"
      style="background: #292929"
      class="py-16"
    >
      <div class="py-16"></div>
      <div class="py-16">
        <v-card
          width="600"
          class="mx-auto mt-5"
          justify="center"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <v-card-title>
            <h1 class="font-weight-medium grey--text text--lighten-2">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                dark
                v-model="name"
                label="Usuario"
                prepend-icon="mdi-account-circle"
                type="text"
              />
              <v-text-field
                dark
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>

          <v-alert id="error" type="error" v-show="visible"
            >El usuario y contraseña no son correctos</v-alert
          >

          <v-card-actions>
            <template>
              <div class="text-center">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-x
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      v-bind="attrs"
                      v-on="on"
                      class="text-decoration-underline grey--text"
                    >
                      Recuperar contraseña
                    </v-btn>

                    <v-btn right absolute text class="custom_buttonb grey--text" @click="login()"
                      >Login</v-btn
                    >
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >¿Cómo recuperar contraseña?</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >Para recuperar la contraseña, llama al numero
                            +666666666
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>
                  </v-card>
                </v-menu>
              </div>
            </template>
          </v-card-actions>
        </v-card>
        <v-spacer class="pt-2"></v-spacer>
        <v-card
          width="600"
          class="mx-auto"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
             
          "
        >
          <v-card-title
            style="font-size: 20px; padding-top: 15px; padding-left: 10px" class="font-weight-medium grey--text text--lighten-1"
            >¿Aún no está registrado?
            <v-btn right absolute text class="custom_buttonb grey--text" route to="/Registro"
              >Registrarse</v-btn
            >
            <v-snackbar v-model="snackbar" :timeout="2000">
              Datos incorrectos
            </v-snackbar>
          </v-card-title>
        </v-card>
      </div>
      <div class="py-16"></div>
      <div class="py-8"></div>
    </div>
  </v-app>
</template>

<script>
//import store from "../store";

export default {
  name: "Login",

  data() {
    return {
      menu: null,
      visible: false,
      showPassword: false,
      name: "",
      password: "",
      snackbar: false,
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch("changeStateLogueadoAction");
      this.$router.push({ path: "/" });
    },
  },
  components: {},
};
</script>
