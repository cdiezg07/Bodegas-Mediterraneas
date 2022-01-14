<template>
  <v-container>
    <v-card
      flat
      style="
        background: #eeeeee;
        box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
      "
    >
      <v-img
        height="300px"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      >
        <v-card-title class="white--text mt-8">
          <v-avatar size="240">
            <v-img src="https://thispersondoesnotexist.com/image"></v-img>
          </v-avatar>

          <h2 class="pl-5">
            Pedro<br />
            Pascual Duarte
          </h2>
        </v-card-title>
      </v-img>

      <v-card-text>
        <v-row no-gutters>
          <v-col :cols="1 === 1 ? 3 : 8">
            <v-btn class="ma-2 custom_button" color="primary" text>
              Editar Perfil
              <v-icon right> mdi-account-edit </v-icon>
            </v-btn>

            <v-btn class="ma-2 custom_button" color="red" text>
              Eliminar Cuenta
              <v-icon dark right> mdi-delete-forever </v-icon>
            </v-btn>
          </v-col>
          <v-col :cols="2 === 1 ? 3 : 8">
            <v-card
              class="rounded-lg mb-5"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <v-row class="mt-4">
                <v-col>
                  <div
                    class="mx-2 rounded-lg ml-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4">Dirección</v-card-title>
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        {{ direccion }}
                      </p></v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4">Número de Teléfono</v-card-title>
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        {{ numTel }}
                      </p></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4"
                      >Fecha de Nacimiento</v-card-title
                    >
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        {{ fechNac }}
                      </p></v-card-subtitle
                    >
                  </div>
                </v-col>
                <v-col>
                  <div
                    class="mx-2 rounded-lg mr-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4">Correo Electrónico</v-card-title>
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        {{ corrElec }}
                      </p></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4">Tarjeta de Crédito</v-card-title>
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        {{ tarjCred }}<br />
                        {{ caducidad }}
                      </p></v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4">DNI</v-card-title>
                    <v-card-subtitle class="pl-10">
                      <br />
                      <p>
                        <v-row>
                          <v-col>
                            <v-img
                              :aspect-ratio="16 / 9"
                              :width="200"
                              src="https://sede.policia.gob.es/portalCiudadano/img/dnie.png"
                            >
                            </v-img>
                          </v-col>
                          <v-col>
                            <v-img
                              :aspect-ratio="16 / 9"
                              :width="200"
                              src="https://dni.zeo.es/imagenes/dni-electronico-trasera.png"
                            >
                            </v-img>
                          </v-col>
                        </v-row></p
                    ></v-card-subtitle>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MiPerfil",

  mounted() {},

  data: () => ({
    direccion: "C/ Héroes de Sostoa",
    numTel: "+34 668001122",
    fechNac: "14 Febrero 1990",
    corrElec: "pepascdu@gmail.com",
    tarjCred: "MasterCard que termina en ****4444",
    caducidad: "Fecha Vencimiento 08/21",
    dni: "",
  }),
  methods: {},
};
</script>
