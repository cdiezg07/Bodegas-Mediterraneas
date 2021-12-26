<template>
  <v-app class="pt-3">
    <div class="d-flex justify-center">
      <v-card height="400" width="1800" class="rounded-lg" id="card">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="375" tile>
            <v-img :src="bodega.src" class="rounded-lg"></v-img>
          </v-avatar>
          <v-col cols="5"
            ><div>
              <v-card-title class="text-h4">{{ bodega.nombre }} </v-card-title>

              <v-card-subtitle class="pb-0 text-h6">{{
                bodega.localizacion
              }}</v-card-subtitle>
              <v-card-subtitle class="pt-0">{{
                bodega.provincia
              }}</v-card-subtitle>

              <div>
                <v-card-text>
                  <p>{{ bodega.descripcion }}</p>
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
        ><div class="text-center">
          <v-select
            v-model="selector"
            :items="select"
            label="Productos"
            dense
            solo
            @change="print()"
          ></v-select></div
      ></v-row>
    </div>
    <div v-if="selector == 'Productos'" class="ml-11">
      <v-row>
        <v-col v-for="(p, i) in productos" :key="i" cols="2">
          <v-card class="ma-2" height="400">
            <v-img :src="p.src" class="mt-1" height="250" contain></v-img>

            <v-card-title>
              <span>{{ p.nombre }}</span>
            </v-card-title>
            <v-card-subtitle class="pb-0">
              <span> {{ p.precio }}</span></v-card-subtitle
            >
            <div class="d-flex justify-center pb-3 pt-2">
              <v-btn color="success" text block router to="/Producto">
                ver producto
              </v-btn>
            </div>
          </v-card>
        </v-col></v-row
      >
    </div>
    <div v-if="selector == 'Eventos'" class="ml-11">
      <v-slide-group show-arrows>
        <v-slide-item v-for="(e, i) in eventos" :key="i">
          <v-card class="ma-2">
            <v-img :src="e.src" class="mt-1" height="250" contain></v-img>

            <v-card-title> {{ e.nombre }} </v-card-title>
            <div class="d-flex justify-center pb-3">
              <v-btn color="success" text block router to="/Evento">
                ver evento
              </v-btn>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Tienda",

  mounted() {},

  data: () => ({
    select: ["Productos", "Eventos"],
    selector: "Productos",

    bodega: {
      src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
      nombre: "Bodegas Arzuaga Navarro",
      localizacion: "Quintanilla de Onésimo",
      provincia: "Valladolid",
      descripcion:
        "En plena Denominación de Origen Ribera del Duero se encuentra una de las mejores bodegas para visitar en España: Arguaza Navarro. Situada en la localidad de Quintanilla de Onésimo, esta bodega ofrece al visitante todo lo necesario para disfrutar de una maravillosa estancia conociendo la cultura del vino. Una extensa finca en la que la flora, la fauna y, por supuesto, los viñedos son protagonistas; dos restaurantes en los que disfrutar de la exquisita gastronomía de la zona, un spa con tratamientos exclusivos de vinoterapia, un acogedor y confortable hotel ideal para descansar y diversas actividades relacionadas con el mundo del vino. Ingredientes que dan lugar a una fantástica experiencia enoturística. ¿Te animas a disfrutar de ella en primera persona?",
    },

    productos: [
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png",
        nombre: "ARZUAGA CRIANZA 2019",
        precio: "11,00€ – 303,00€",
      },
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/plantaHOME-fe1586da.png",
        nombre: "LA PLANTA 2020",
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

    eventos: [{}],
  }),
  methods: {
    print: function () {
      console.log(this.selector);
    },
  },
};
</script>
