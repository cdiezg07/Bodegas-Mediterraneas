<template>
  <v-container>
    <div v-if="!$store.getters.darkMode"
      style="background: #d9d9d9"
      class="my-4"
      >
      <v-card     
      style="background: #dedede; box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
      "
    >
      <v-img
        height="300px"
        src="https://static2.diariovasco.com/www/multimedia/201904/22/media/bodega.jpg"
      >
        <v-card-title class="white--text mt-8">
          <v-avatar size="240">
            <v-img src="https://thispersondoesnotexist.com/image"></v-img>
          </v-avatar>

          <h2 class="pl-5">
            Rodrigo<br />
            López Suarez
          </h2>
        </v-card-title>
      </v-img>

      <v-card-text>
        <v-row no-gutters>
          <v-col :cols="1 === 1 ? 3 : 8">
            <v-btn v-if="!editando" class="ma-2 custom_button" color="primary" text @click="editando = !editando">
              Editar Perfil
              <v-icon right> mdi-account-edit </v-icon>
            </v-btn>

            <v-btn v-if="!editando" class="ma-2 custom_button" color="red" text @click="dialog = !dialog">
              Eliminar Cuenta
              <v-icon right> mdi-delete-forever </v-icon>
            </v-btn>

            <v-btn v-if="editando" class="ma-2 custom_button" color="green" text @click="editando = !editando">
              Confirmar
              <v-icon right> mdi-check-bold </v-icon>
            </v-btn>
          </v-col>
          <v-col :cols="2 === 1 ? 3 : 8">


            <v-card v-if="!editando"
              class="rounded-lg mb-5 ml-3"
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

            <v-card v-if="editando"
              class="rounded-lg mb-5 ml-3"
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
                    <v-card-title class="pl-4 pb-0">Dirección</v-card-title>
                    <v-card-subtitle class="pl-10 pb-0">
                      <br />
                      <v-form>
                        <v-text-field
                          v-model="direccion"               prepend-icon="mdi-home-city"          
                        ></v-text-field>
                      </v-form>
                      </v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4 pb-0">Número de Teléfono</v-card-title>
                    <v-card-subtitle class="pl-10 pb-0">
                      <br />
                      <v-form>
                        <v-text-field
                          v-model="numTel"                   prepend-icon="mdi-cellphone"      
                        ></v-text-field>
                      </v-form>
                      </v-card-subtitle
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
                      </p>
                      </v-card-subtitle
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
                    <v-card-title class="pl-4 pb-0">Correo Electrónico</v-card-title>
                    <v-card-subtitle class="pl-10 pb-0">
                      <br />
                      <v-form>
                        <v-text-field
                          v-model="corrElec"                prepend-icon="mdi-email"         
                        ></v-text-field>
                      </v-form>
                      </v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4 pb-0">Tarjeta de Crédito</v-card-title>
                    <v-card-subtitle class="pl-10 pb-0">
                      <br />
                      <v-form>
                        <v-text-field class="pb-0 pt-0"
                          v-model="tarjCredEd"              clearable
                          prepend-icon="mdi-credit-card-outline"
                        ></v-text-field><v-text-field class="pb-0 pt-0"
                          v-model="caducidadEd"                         clearable prepend-icon="mdi-calendar-range"
                        ></v-text-field>
                      </v-form>
                      </v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #dbdbdb;
                      box-shadow: inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff;
                        
                    "
                  >
                    <v-card-title class="pl-4 pb-0">DNI</v-card-title>
                    <v-file-input
                    show-size
                    counter
                    class="px-5 pt-0 pb-0"
                    multiple
                    label="Foto del DNI o pasaporte"
                  ></v-file-input>
                    <v-card-subtitle class="pl-10 pt-0">
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
    </div>

    <div v-if="$store.getters.darkMode"
      style="background: #292929"
      class="my-4"
      >
      <v-card
      style="
        background: #292929;
        box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;      
      "
    >
      <v-img
        height="300px"
        src="https://static2.diariovasco.com/www/multimedia/201904/22/media/bodega.jpg"
      >
        <v-card-title class="white--text mt-8">
          <v-avatar size="240">
            <v-img src="https://thispersondoesnotexist.com/image"></v-img>
          </v-avatar>

          <h2 class="pl-5">
            Rodrigo<br />
            López Suarez
          </h2>
        </v-card-title>
      </v-img>

      <v-card-text>
        <v-row no-gutters>
          <v-col :cols="1 === 1 ? 3 : 8">
            <v-btn v-if="!editando" class="ma-2 custom_buttonb" color="primary" text @click="editando = !editando">
              Editar Perfil
              <v-icon right> mdi-account-edit </v-icon>
            </v-btn>

            <v-btn v-if="!editando" class="ma-2 custom_buttonb" color="red" text @click="dialog = !dialog">
              Eliminar Cuenta
              <v-icon right> mdi-delete-forever </v-icon>
            </v-btn>
            <v-btn v-if="editando" class="ma-2 custom_buttonb" color="green" text @click="editando = !editando">
              Confirmar
              <v-icon right> mdi-check-bold </v-icon>
            </v-btn>
          </v-col>
          <v-col :cols="2 === 1 ? 3 : 8">
            <v-card v-if="!editando"
              class="rounded-lg mb-5 ml-3"
              style="
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            >
              <v-row class="mt-4">
                <v-col>
                  <div
                    class="mx-2 rounded-lg ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1">Dirección</v-card-title>
                    <v-card-subtitle class="pl-10 grey--text">
                      <br />
                      <p>
                        {{ direccion }}
                      </p></v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1">Número de Teléfono</v-card-title>
                    <v-card-subtitle class="pl-10 grey--text">
                      <br />
                      <p>
                        {{ numTel }}
                      </p></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1"
                      >Fecha de Nacimiento</v-card-title
                    >
                    <v-card-subtitle class="pl-10 grey--text">
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
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1">Correo Electrónico</v-card-title>
                    <v-card-subtitle class="pl-10 grey--text">
                      <br />
                      <p>
                        {{ corrElec }}
                      </p></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1">Tarjeta de Crédito</v-card-title>
                    <v-card-subtitle class="pl-10 grey--text">
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
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1">DNI</v-card-title>
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
            <v-card v-if="editando"
              class="rounded-lg mb-5 ml-3"
              style="
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            >
              <v-row class="mt-4">
                <v-col>
                  <div
                    class="mx-2 rounded-lg ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 pb-0 grey--text text--lighten-1">Dirección</v-card-title>
                    <v-card-subtitle class="pl-10 pb-0 grey--text">
                      <br />
                      <v-form>
                        <v-text-field
                        dark
                          v-model="direccion"               prepend-icon="mdi-home-city"          
                        ></v-text-field>
                      </v-form></v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 pb-0  grey--text text--lighten-1">Número de Teléfono</v-card-title>
                    <v-card-subtitle class="pl-10  pb-0 grey--text">
                      <br />
                      <v-form>
                        <v-text-field
                        dark
                          v-model="numTel"                   prepend-icon="mdi-cellphone"      
                        ></v-text-field>
                      </v-form></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 ml-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 grey--text text--lighten-1"
                      >Fecha de Nacimiento</v-card-title
                    >
                    <v-card-subtitle class="pl-10 grey--text">
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
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4  pb-0 grey--text text--lighten-1">Correo Electrónico</v-card-title>
                    <v-card-subtitle class="pl-10  pb-0 grey--text">
                      <br />
                      <v-form>
                        <v-text-field
                        dark
                          v-model="corrElec"                prepend-icon="mdi-email"         
                        ></v-text-field>
                      </v-form></v-card-subtitle
                    >
                  </div>
                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 pb-0 grey--text text--lighten-1">Tarjeta de Crédito</v-card-title>
                    <v-card-subtitle class="pl-10  pb-0  grey--text">
                      <br />
                      <v-form>
                        <v-text-field class="pb-0 pt-0"
                          v-model="tarjCredEd"              clearable
                          dark
                          prepend-icon="mdi-credit-card-outline"
                        ></v-text-field><v-text-field class="pb-0 pt-0"
                        dark
                          v-model="caducidadEd"                         clearable prepend-icon="mdi-calendar-range"
                        ></v-text-field>
                      </v-form></v-card-subtitle
                    >
                  </div>

                  <div
                    class="mx-2 rounded-lg mt-3 mr-3"
                    style="
                      background: #292929;
                      box-shadow: inset 6px 6px 12px #1a1a1a,inset -6px -6px 12px #383838;           
                    "
                  >
                    <v-card-title class="pl-4 pb-0 grey--text text--lighten-1">DNI</v-card-title>
                    <v-file-input
                    show-size
                    counter
                    dark
                    class="px-5 pt-0 pb-0"
                    multiple
                    label="Foto del DNI o pasaporte"
                  ></v-file-input>
                    <v-card-subtitle class="pl-10 pt-0">
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
    </div>
    


    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card v-if="!$store.getters.darkMode" style="background: #dedede; box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
      ">
        <v-card-title class="text-h5">
          Eliminar cuenta
        </v-card-title>
        <v-card-text class="body-1">¿Está seguro de que quiere eliminar la cuenta del sitio?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1 "
            class="custom_button"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-btn 
            color="green darken-1"
            class="custom_button"
            text
            @click="dialog = false"
          >
            Sí
          </v-btn>
        </v-card-actions>
      </v-card>


      <v-card v-if="$store.getters.darkMode" style="
        background: #292929;
        box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;      
      ">
        <v-card-title class="text-h5 grey--text text--lighten-2">
          Eliminar cuenta
        </v-card-title>
        <v-card-text class="body-1 grey--text ">¿Está seguro de que quiere eliminar la cuenta del sitio?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1 "
            class="custom_buttonb"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-btn 
            color="green darken-1"
            class="custom_buttonb"
            text
            @click="dialog = false"
          >
            Sí
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    


  </v-container>
</template>

<script>
export default {
  name: "MiPerfil",

  mounted() {},

  data: () => ({
    dialog: false,
    direccion: "C/ Héroes de Sostoa",
    numTel: "+34 668001122",
    fechNac: "14 Febrero 1990",
    corrElec: "rolopsuar@gmail.com",
    tarjCred: "MasterCard que termina en ****4444",
    tarjCredEd: "***************4444",
    caducidad: "Fecha Vencimiento 08/21",
    caducidadEd: "08/21",
    dni: "",
    editando: false,
  }),
  methods: {},
};
</script>
