<template>
  <v-main class="pt-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-card
            width="800"
            class="mx-auto mt-5"
            justify="center"
            style="
              background: #dedede;
              box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
            "
          >
            <v-card-title class="d-flex justify-center">
              <h1 class="font-weight-medium">Registro</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="nombre"
                  label="Nombre"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-text-field
                  v-model="apellidos"
                  label="Apellidos"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-text-field
                  v-model="direccion"
                  label="Direccion"
                  prepend-icon="mdi-home-city"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-text-field
                  v-model="telefono"
                  label="Telefono"
                  prepend-icon="mdi-cellphone"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-text-field
                  v-model="correo"
                  label="Correo Electronico"
                  prepend-icon="mdi-email"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-text-field
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :rules="[rules.required, rules.counter]"
                />
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Fecha de nacimiento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-text-field
                  v-model="tarjetaCredito"
                  label="Tarjeta de credito (opcional)"
                  prepend-icon="mdi-credit-card-outline"
                  type="text"
                  :rules="[rules.required, rules.counter]"
                />
                <v-row>
                  <v-col sm="6">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Fecha de caducidad (opcional)"
                          prepend-icon="mdi-credit-card-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col class="pl-5" sm="6">
                    <v-text-field
                      v-model="cvc"
                      label="CVC"
                      prepend-icon="mdi-credit-card-outline"
                      v-on="on"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-file-input
                  show-size
                  counter
                  multiple
                  label="Foto del DNI o pasaporte"
                ></v-file-input>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <template>
                <v-btn class="mb-2 custom_button" block @click="mandarDatos()"
                  >Registro</v-btn
                >
                <v-snackbar v-model="snackbar" :timeout="2000">
                  Registrado
                </v-snackbar>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!--:to="{ path: '/' }"-->

    <v-footer class="mt-5">
      <v-card-text class=".font-italic font-weight-bold text-center">
        &copy;2021 — <strong>Bodegas Mediterraneas</strong>
      </v-card-text>
    </v-footer>
  </v-main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      name: "",
      password: "",
      nombre: "",
      apellidos: "",
      DNI: "",
      snackbar: false,
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    login: function () {
      console.log("loggeado");
    },

    mandarDatos: function () {
      console.log("entrado");

      this.$router.push({ path: "/Login" });
    },
  },
  components: {},
};
</script>
