<template>
  <v-main class="ma-0 pa-0">


    <div
      v-if="!$store.getters.darkMode"
      style="background: #d9d9d9"
      class="pt-5"
    >
      <div class="d-flex justify-center" v-if="$store.getters.currentLenguaje ==='es'">
        <v-card
          height="400"
          width="1800"
          class="rounded-lg"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="375" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="5"
              ><div>
                <v-card-title class="text-h4"
                  >{{ bodega.nombre }}
                </v-card-title>

                <v-card-subtitle class="pb-0 text-h6">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <div>
                  <v-card-text class=" body-1">
                    <p>{{ bodega.descripcion }}</p>
                  </v-card-text>
                </div>
              </div></v-col
            >
            <div class="pt-3">
              <v-avatar tile height="375" width="640" class="rounded-lg" >
                <v-img src="../assets/map.png"> </v-img
              ></v-avatar>
            </div>

            <v-col></v-col>
          </div>
        </v-card>
      </div>
      <div class="d-flex justify-center" v-if="$store.getters.currentLenguaje ==='en'">
        <v-card
          height="400"
          width="1800"
          class="rounded-lg"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="375" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="5"
              ><div>
                <v-card-title class="text-h4"
                  >{{ bodega_en.nombre }}
                </v-card-title>

                <v-card-subtitle class="pb-0 text-h6">{{
                  bodega_en.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0">{{
                  bodega_en.provincia
                }}</v-card-subtitle>

                <div>
                  <v-card-text class=" body-1">
                    <p>{{ bodega_en.descripcion }}</p>
                  </v-card-text>
                </div>
              </div></v-col
            >
            <div class="pt-3">
              <v-avatar tile height="375" width="640" class="rounded-lg" >
                <v-img src="../assets/map.png"> </v-img
              ></v-avatar>
            </div>

            <v-col></v-col>
          </div>
        </v-card>
      </div>
      <div class="ml-15 mt-8">
        <v-row
          ><div class="text-center" v-if="$store.getters.currentLenguaje ==='es'">
            <v-select
              v-model="selector"
              :items="select"
              dense
              solo
              @change="print(selector)"
              class="selects mb-6"
              style="
                height: 30px;
                background: #e0e0e0;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            ></v-select></div
        ><div class="text-center" v-if="$store.getters.currentLenguaje ==='en'">
            <v-select
              v-model="selector_en"
              :items="select_en"
              dense
              solo
              @change="print(selector_en)"
              class="selects mb-6"
              style="
                height: 30px;
                background: #e0e0e0;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            ></v-select></div
        ></v-row>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div v-if="selector == 'Productos'" class="ml-11">
        <v-row>
          <v-col v-for="(p, i) in productos" :key="i" cols="2">
            <v-card
              class="ma-3 pt-1"
              height="420"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <v-img :src="p.src" class="mt-1" height="250" contain></v-img>

              <v-card-title>{{ p.nombre }} </v-card-title>
              <v-card-subtitle class="pb-0">
                <span> {{ p.precio }}</span></v-card-subtitle
              >

              <div class="d-flex justify-center pb-3 pt-2">
                <v-btn class="custom_button" text router to="/Producto">
                  ver producto
                </v-btn>
              </div>
            </v-card>
          </v-col></v-row
        >
      </div>

      </div>

      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div v-if="selector_en == 'Products'" class="ml-11">
        <v-row>
          <v-col v-for="(p, i) in productos" :key="i" cols="2">
            <v-card
              class="ma-3 pt-1"
              height="420"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <v-img :src="p.src" class="mt-1" height="250" contain></v-img>

              <v-card-title>{{ p.nombre }} </v-card-title>
              <v-card-subtitle class="pb-0">
                <span> {{ p.precio }}</span></v-card-subtitle
              >

              <div class="d-flex justify-center pb-3 pt-2">
                <v-btn class="custom_button" text router to="/Producto">
                  view product
                </v-btn>
              </div>
            </v-card>
          </v-col></v-row
        >
      </div>
      </div>
      
      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div v-if="selector == 'Eventos'" class="mb-16">
        <v-slide-group show-arrows class="mt-2">
          <v-slide-item v-for="(e, i) in eventos" :key="i" class="ma-3 mr-2 mb-11">
            <v-card
              height="330"
              width="600"
              class="rounded-lg"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <div class="d-flex justify-start">
                <v-avatar class="ma-3" size="300" tile>
                  <v-img :src="e.src" class="rounded-lg"></v-img>
                </v-avatar>
                <v-col cols="6"
                  ><div>
                    <v-card-title
                      class="text-h5 mr-2"
                      v-text="e.nombre"
                    ></v-card-title>

                    <v-card-subtitle class="pb-0 mr-2 body-1">{{
                      e.descripcion
                    }}</v-card-subtitle>

                    <v-card-actions class="ml-2">
                      <div>
                        <v-btn text class="custom_button" router to="/Evento">
                          ver más
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </div></v-col
                >
              </div>
            </v-card>
            <!---->
          </v-slide-item>
        </v-slide-group>
      </div>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div v-if="selector_en == 'Events'" class="mb-16">
        <v-slide-group show-arrows class="mt-2">
          <v-slide-item v-for="(e, i) in eventos_en" :key="i" class="ma-3 mr-2 mb-11">
            <v-card
              height="330"
              width="600"
              class="rounded-lg"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <div class="d-flex justify-start">
                <v-avatar class="ma-3" size="300" tile>
                  <v-img :src="e.src" class="rounded-lg"></v-img>
                </v-avatar>
                <v-col cols="6"
                  ><div>
                    <v-card-title
                      class="text-h5 mr-2"
                      v-text="e.nombre"
                    ></v-card-title>

                    <v-card-subtitle class="pb-0 mr-2 body-1">{{
                      e.descripcion
                    }}</v-card-subtitle>

                    <v-card-actions class="ml-2">
                      <div>
                        <v-btn text class="custom_button" router to="/Evento">
                          view more
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </div></v-col
                >
              </div>
            </v-card>
            <!---->
          </v-slide-item>
        </v-slide-group>
      </div>
      </div>
      
    </div>



    <div
      v-if="$store.getters.darkMode"
      style="background: #292929"
      class="pt-5"
    >
      <div class="d-flex justify-center" v-if="$store.getters.currentLenguaje ==='es'">
        <v-card
          height="400"
          width="1800"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="375" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="5"
              ><div>
                <v-card-title class="text-h4 grey--text text--lighten-2"
                  >{{ bodega.nombre }}
                </v-card-title>

                <v-card-subtitle class="pb-0 text-h6 grey--text">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 grey--text">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <div>
                  <v-card-text>
                    <p class="grey--text  body-1">{{ bodega.descripcion }}</p>
                  </v-card-text>
                </div>
              </div></v-col
            >
            <div class="pt-3">
              <v-avatar tile height="375" width="640" class="rounded-lg">
                <v-img src="../assets/map.png"> </v-img
              ></v-avatar>
            </div>

            <v-col></v-col>
          </div>
        </v-card>
      </div>
      <div class="d-flex justify-center" v-if="$store.getters.currentLenguaje ==='en'">
        <v-card
          height="400"
          width="1800"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="375" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="5"
              ><div>
                <v-card-title class="text-h4 grey--text text--lighten-2"
                  >{{ bodega_en.nombre }}
                </v-card-title>

                <v-card-subtitle class="pb-0 text-h6 grey--text">{{
                  bodega_en.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 grey--text">{{
                  bodega_en.provincia
                }}</v-card-subtitle>

                <div>
                  <v-card-text>
                    <p class="grey--text  body-1">{{ bodega_en.descripcion }}</p>
                  </v-card-text>
                </div>
              </div></v-col
            >
            <div class="pt-3">
              <v-avatar tile height="375" width="640" class="rounded-lg">
                <v-img src="../assets/map.png"> </v-img
              ></v-avatar>
            </div>

            <v-col></v-col>
          </div>
        </v-card>
      </div>
      <div class="ml-15 mt-8">
        <v-row
          ><div class="text-center" v-if="$store.getters.currentLenguaje ==='es'">
            <v-select
              v-model="selector"
              :items="select"
              item-color="black"
              dense
              solo
              dark
              @change="print()"
              class="selects mb-6"
              style="
                height: 30px;
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            ></v-select></div
        ><div class="text-center" v-if="$store.getters.currentLenguaje ==='en'">
            <v-select
              v-model="selector_en"
              :items="select_en"
              item-color="black"
              dense
              solo
              dark
              @change="print()"
              class="selects mb-6"
              style="
                height: 30px;
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            ></v-select></div
        ></v-row>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div v-if="selector == 'Productos'" class="ml-11">
        <v-row>
          <v-col v-for="(p, i) in productos" :key="i" cols="2">
            <v-card
              class="ma-3 pt-1"
              height="420"
              style="
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            >
              <v-img :src="p.src" class="mt-1" height="250" contain></v-img>

              <v-card-title class="grey--text text--lighten-2"
                >{{ p.nombre }}
              </v-card-title>
              <v-card-subtitle class="pb-0 grey--text">
                <span> {{ p.precio }}</span></v-card-subtitle
              >

              <div class="d-flex justify-center pb-3 pt-2">
                <v-btn
                  class="custom_buttonb grey--text"
                  text
                  router
                  to="/Producto"
                >
                  ver producto
                </v-btn>
              </div>
            </v-card>
          </v-col></v-row
        >
      </div>
      </div>
      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div v-if="selector_en == 'Products'" class="ml-11">
        <v-row>
          <v-col v-for="(p, i) in productos" :key="i" cols="2">
            <v-card
              class="ma-3 pt-1"
              height="420"
              style="
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            >
              <v-img :src="p.src" class="mt-1" height="250" contain></v-img>

              <v-card-title class="grey--text text--lighten-2"
                >{{ p.nombre }}
              </v-card-title>
              <v-card-subtitle class="pb-0 grey--text">
                <span> {{ p.precio }}</span></v-card-subtitle
              >

              <div class="d-flex justify-center pb-3 pt-2">
                <v-btn
                  class="custom_buttonb grey--text"
                  text
                  router
                  to="/Producto"
                >
                  view product
                </v-btn>
              </div>
            </v-card>
          </v-col></v-row
        >
      </div>
      </div>
      
      <div v-if="$store.getters.currentLenguaje ==='es'">
  <div v-if="selector == 'Eventos'" class="mb-16">
          <v-slide-group show-arrows dark class="mt-2">
            <v-slide-item v-for="(e, i) in eventos" :key="i" class="ma-3 mr-2 mb-11">
              <v-card
                height="330"
                width="600"
                class="rounded-lg"
                style="
                  background: #292929;
                  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                "
              >
                <div class="d-flex justify-start">
                  <v-avatar class="ma-3" size="300" tile>
                    <v-img :src="e.src" class="rounded-lg"></v-img>
                  </v-avatar>
                  <v-col cols="6"
                    ><div>
                      <v-card-title
                        class="text-h5 mr-2 grey--text text--lighten-2"
                        v-text="e.nombre"
                      ></v-card-title>

                      <v-card-subtitle class="pb-0 mr-2 grey--text body-1">{{
                        e.descripcion
                      }}</v-card-subtitle>

                      <v-card-actions class="ml-2">
                        <div>
                          <v-btn
                            text
                            class="custom_buttonb grey--text"
                            router
                            to="/Evento"
                          >
                            ver más
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </div></v-col
                  >
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>
      <div v-if="$store.getters.currentLenguaje ==='en'">
  <div v-if="selector_en == 'Events'" class="mb-16">
          <v-slide-group show-arrows dark class="mt-2">
            <v-slide-item v-for="(e, i) in eventos_en" :key="i" class="ma-3 mr-2 mb-11">
              <v-card
                height="330"
                width="600"
                class="rounded-lg"
                style="
                  background: #292929;
                  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                "
              >
                <div class="d-flex justify-start">
                  <v-avatar class="ma-3" size="300" tile>
                    <v-img :src="e.src" class="rounded-lg"></v-img>
                  </v-avatar>
                  <v-col cols="6"
                    ><div>
                      <v-card-title
                        class="text-h5 mr-2 grey--text text--lighten-2"
                        v-text="e.nombre"
                      ></v-card-title>

                      <v-card-subtitle class="pb-0 mr-2 grey--text body-1">{{
                        e.descripcion
                      }}</v-card-subtitle>

                      <v-card-actions class="ml-2">
                        <div>
                          <v-btn
                            text
                            class="custom_buttonb grey--text"
                            router
                            to="/Evento"
                          >
                            view more
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </div></v-col
                  >
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>
      
    </div>


  </v-main>
</template>

<script>
export default {
  name: "Tienda",

  mounted() {},

  data: () => ({
    select: ["Productos", "Eventos"],
    select_en: ["Products", "Events"],
    selector: "Productos",
    selector_en: "Products",

    bodega: {
      src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
      nombre: "Bodegas Arzuaga Navarro",
      localizacion: "Quintanilla de Onésimo",
      provincia: "Valladolid",
      descripcion:
        "En plena Denominación de Origen Ribera del Duero se encuentra una de las mejores bodegas para visitar en España: Arguaza Navarro. Situada en la localidad de Quintanilla de Onésimo, esta bodega ofrece al visitante todo lo necesario para disfrutar de una maravillosa estancia conociendo la cultura del vino. Una extensa finca en la que la flora, la fauna y, por supuesto, los viñedos son protagonistas; dos restaurantes en los que disfrutar de la exquisita gastronomía de la zona, un spa con tratamientos exclusivos de vinoterapia, un acogedor y confortable hotel ideal para descansar y diversas actividades relacionadas con el mundo del vino. Ingredientes que dan lugar a una fantástica experiencia enoturística. ¿Te animas a disfrutar de ella en primera persona?",
    },
    bodega_en: {
      src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
      nombre: "Arzuaga Navarro Winery",
      localizacion: "Quintanilla de Onésimo",
      provincia: "Valladolid",
      descripcion:
        "In the heart of the Ribera del Duero Denomination of Origin is one of the best wineries to visit in Spain: Arguaza Navarro. Located in the town of Quintanilla de Onésimo, this winery offers visitors everything they need to enjoy a wonderful stay and learn about the culture of wine. An extensive estate where the flora, fauna and, of course, the vineyards are the protagonists; two restaurants where you can enjoy the exquisite gastronomy of the area, a spa with exclusive wine therapy treatments, a cozy and comfortable hotel ideal for relaxing and various activities related to the world of wine. Ingredients that give rise to a fantastic wine tourism experience. Do you dare to enjoy it in first person?",
    },

    productos: [
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png",
        nombre: "ARZUAGA CRIANZA 2019",
        precio: "11,00€ – 303,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/plantaHOME-fe1586da.png",
        nombre: "LA PLANTA CRIANZA 2020",
        precio: "8,50€ – 17,50€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/reservaHOME-f5033f95.png",
        nombre: "ARZUAGA RESERVA 2018",
        precio: "32,50€ – 439,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/RVespecialHOME-b0630f50.png",
        nombre: "ARZUAGA RESERVA ESPECIAL",
        precio: "55,35€ – 990,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/gran-reservaHOME-a6f87699.png",
        nombre: "ARZUAGA GRAN RESERVA 2015",
        precio: "82,90€ – 195,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/laderasHOME-1e34dc38.png",
        nombre: "LADERAS DEL NORTE 2019",
        precio: "–",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/GranArzuagaHOME-a0246561.png",
        nombre: "GRAN ARZUAGA",
        precio: "138,50€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/amayaHOME-dfb9eeca.png",
        nombre: "AMAYA ARZUAGA 2016",
        precio: "64,90€ – 130,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/fanHOME-dc6f362a.png",
        nombre: "FAN D'ORO 2019",
        precio: "11,90€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/rosaeHOME-372fdfb2.png",
        nombre: "ARZUAGA ROSAE 2020",
        precio: "10,90€ – 50,25€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/FlorentinoHOME-902c20db.png",
        nombre: "PAGO FLORENTINO 2018",
        precio: "12,75€ – 293,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/motaHOME-72000349.png",
        nombre: "PAGO MOTA 2020",
        precio: "6,95€",
      },
    ],

    eventos: [
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/cata-eae04710.jpeg",
        nombre: "Taller de cata a cargo de nuestro equipo de sumillería.",
        descripcion: "Taller de cata y degustación de nuestros vinos",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/barricas-0a498ee0.jpeg",
        nombre: "Sensaciones enológicas",
        descripcion: "Visita por el interior de las bodegas",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/copa-3e789739.jpeg",
        nombre: "Descubriendo Arzuaga",
        descripcion: "Visita al viñedo y las bodegas",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/CIERVOS-CATA-10327442.jpeg",
        nombre: "Naturaleza en directo",
        descripcion: "Visita guiada por los viñedos y reservas de caza",
      },
    ],
    eventos_en: [
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/cata-eae04710.jpeg",
        nombre: "Tasting workshop conducted by our sommelier team.",
        descripcion: "Tasting workshop and tasting of our wines",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/barricas-0a498ee0.jpeg",
        nombre: "Oenological sensations",
        descripcion: "Visit inside the wineries",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/copa-3e789739.jpeg",
        nombre: "Discovering Arzuaga",
        descripcion: "Visit to the vineyard and wineries",
      },
      {
        src: "https://arzuaganavarro.com/templates/yootheme/cache/CIERVOS-CATA-10327442.jpeg",
        nombre: "Live nature",
        descripcion: "Guided tour of the vineyards and hunting reserves",
      },
    ],
  }),
  methods: {
    print: function (a) {
      console.log(a);
    },
  },
};
</script>
