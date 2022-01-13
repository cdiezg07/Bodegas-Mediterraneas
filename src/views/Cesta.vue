<template>
  <v-app class="pt-5">
    <div class="d-flex justify-center mx-16 mt-6">
      <v-row class="mb-6" no-gutters>
        <v-col md="5" class="ml-16">
          <div>
            <v-col>
              <h1>Cesta</h1>
              <div v-for="(p, i) in cesta" :key="i">
                <v-card
                  class="rounded-lg"
                  style="
                    background: #dedede;
                    box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
                  "
                >
                  <v-row class="mb-6" no-gutters>
                    <v-col md="3">
                      <div>
                        <v-img
                          :src="p.src"
                          class="ma-1 rounded-lg"
                          height="170"
                          contain
                          style="background-color: white"
                        ></v-img>
                      </div>
                    </v-col>
                    <v-col>
                      <v-card-title
                        class="text-h5"
                        v-text="p.nombre"
                      ></v-card-title>

                      <v-card-subtitle class="pb-0"
                        ><h2>{{ p.precio }}</h2></v-card-subtitle
                      >
                      <v-card-subtitle class="pt-0"
                        ><h3>Cantidad: {{ p.cantidad }}</h3>
                      </v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </v-col>
          </div>
        </v-col>
        <v-col md="4" offset-md="" class="ml-16 mt-16">
          <v-card
            class="pa-2 rounded-lg"
            style="
              background: #dedede;
              box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
            "
            ><v-form>
              <v-text-field
                label="Dirección de envío"
                prepend-icon="mdi-account-circle"
                type="text"
              />
              <v-text-field
                label="Código postal"
                prepend-icon="mdi-account-circle"
                type="text"
              />
              <v-text-field
                label="Tarjeta de crédito"
                prepend-icon="mdi-account-circle"
                type="text"
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
                </v-col> </v-row
              ><v-text-field
                label="Cupón de descuento"
                prepend-icon="mdi-account-circle"
                type="text"
              />
            </v-form>
            <div class="d-flex justify-center mt-6 mb-3">
              <div class="mx-2 custom_button1 rounded-lg pa-2">
                <img
                  src="https://logodownload.org/wp-content/uploads/2019/09/google-pay-logo.png"
                  alt=""
                  height="40"
                />
              </div>
              <div class="mx-2 custom_button1 rounded-lg pa-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  alt=""
                  height="40"
                />
              </div>
              <div class="mx-2 custom_button1 rounded-lg pa-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png"
                  alt=""
                  height="40"
                />
              </div>
            </div>
            <v-btn class="custom_button" block>Hacer pedido</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Evento",

  mounted() {
    this.selected =
      "https://media-verticommnetwork1.netdna-ssl.com/wines/arzuaga-crianza-1714283.jpg";
  },

  data: () => ({
    date: null,
    cvc: null,
    menu2: null,
    cesta: [
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png",
        nombre: "ARZUAGA CRIANZA 2019",
        precio: "11,00€",
        cantidad: "1",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/plantaHOME-fe1586da.png",
        nombre: "LA PLANTA 2020",
        precio: "8,50€",
        cantidad: "2",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/reservaHOME-f5033f95.png",
        nombre: "ARZUAGA RESERVA 2018",
        precio: "32,50€",
        cantidad: "1",
      },
    ],
  }),
  methods: {
    print: function () {
      console.log(this.selector);
    },
  },
};
</script>
