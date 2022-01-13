<template>
  <v-app class="pt-5">
    <div class="d-flex justify-center mx-16 mt-6">
      <v-row class="mb-6" no-gutters>
        <v-col md="5" class="ml-16">
          <div
            style="
              background: #dedede;
              box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
            "
            class="rounded-lg"
          >
            <v-row class="mx-1">
              <v-col md="3">
                <div>
                  <div
                    v-for="(src, i) in imagenes"
                    :key="i"
                    class="d-flex justify-center rounded-lg mb-1 mx-2"
                    style="background-color: white"
                    @mouseover="cambiarImagen(src)"
                  >
                    <v-avatar class="ma-3" size="120" tile>
                      <v-img :src="src" contain class="rounded-lg"></v-img>
                    </v-avatar>
                  </div>
                </div>
              </v-col>
              <v-col md="9" offset-md="">
                <div
                  :key="i"
                  class="d-flex justify-center rounded-lg mb-1"
                  style="background-color: white"
                >
                  <v-avatar class="ma-3" size="570" tile>
                    <v-img :src="selected" contain class="rounded-lg"></v-img>
                  </v-avatar>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" offset-md="" class="ml-16">
          <v-card
            class="pa-2 rounded-lg"
            style="
              background: #dedede;
              box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
            "
          >
            <div>
              <h1>{{ producto.nombre }}</h1>
              <h3>NUESTRO BUQUE INSIGNIA</h3>
              <h4 class="mb-3">RIBERA DEL DUERO</h4>
              <h1 class="pb-2">{{ producto.precio }}</h1>
              <v-row
                ><v-rating
                  hover
                  half-increments
                  length="5"
                  size="30"
                  value="4.5"
                  background-color="orange lighten-3"
                  color="orange"
                  class="pb-9"
                ></v-rating>
                <h3 class="pt-3">(153 valoraciones)</h3>
              </v-row>

              <p>{{ producto.descripcion }}</p>
              <v-row class="pt-4 pl-3 pb-4"
                ><h2 class="mr-8">Cantidad</h2>
                <div
                  class="d-flex rounded-lg"
                  style="
                    background: #dedede;
                    box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
                  "
                >
                  <v-btn min-width="4" width="4" text
                    ><h2 class="" @click="decrementar()">-</h2></v-btn
                  >

                  <h3 class="mt-1 mx-5">{{ cantidad }}</h3>
                  <v-btn min-width="4" width="4" text
                    ><h2 class="" @click="incrementar()">+</h2></v-btn
                  >
                </div>

                <v-btn class="ml-16 custom_button">Comprar</v-btn>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="my-5 ml-16">
      <div class="ml-4"><h2 class="ml-16">Opiniones</h2></div>
    </div>
    <div
      class="d-flex justify-center pb-6"
      v-for="(opinion, i) in opiniones"
      :key="i"
    >
      <v-card width="1600" class="rounded-lg" style="
              background: #dedede;
              box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
            ">
        <v-card-title class="pt-1">{{ opinion.nombre }}</v-card-title>
        <v-card-subtitle> {{ opinion.fecha }}</v-card-subtitle>
        <div class="pl-4 pr-3 pb-1">{{ opinion.opinion }}</div>
      </v-card>
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
    picker: null,
    selected: null,
    cantidad: 1,

    producto: {
      nombre: "Arzuaga Crianza",
      precio: "23,99 €",
      descripcion:
        "Las variedades Tempranillo y Cabernet Sauvignon con las que se elabora este vino pertenecen a la parte más antigua de nuestra finca La Planta; cultivadas a 911 metros de altitud en los suelos arcillo-calcáreos, con la roca madre caliza a un metro de la superficie. La crianza se realiza durante dieciséis meses en barricas de roble francés y americano.",
    },

    opiniones: [
      {
        nombre: "Ada",
        fecha: "2020-08-12",
        opinion:
          "Me tomaría este vino a diario si no fuese tan caro. Para mi es la bodega más infravalorada de Ribera. Está al nivel de las mejores pero no es tan conocida. No dudes en comprar este o cualquier otra etiqueta de arzuaga",
      },
      {
        nombre: "Imanol",
        fecha: "2021-08-03",
        opinion:
          "A la altura del crianza Matarromera de precio similar. Entra de miedo con cualquier carne. Acierto seguro si lo llevas a una cena en casa de amigos por ejemplo.",
      },
      {
        nombre: "Jorge",
        fecha: "2021-07-27",
        opinion:
          "Es un vino maravilloso. No hay palabras para definir sin catarlo. Pruebe y seguro que no le decepciona",
      },
      {
        nombre: "Nacho",
        fecha: "2020-01-08",
        opinion:
          "Una de las referencias de la Ribera del Duero. Carnoso, redondo, de taninos pulidos y potente en boca. Excelente relación calidad-precio.",
      },
      {
        nombre: "Álvaro",
        fecha: "2019-12-08",
        opinion:
          "Excelente vino, no soy entendído en vinos, pero este vino esta delicioso ideal para acostarte calentito en estas noches frías de otoño.",
      },
      {
        nombre: "jesus blanco",
        fecha: "2019-06-12",
        opinion:
          "Es una referencia. Además tiene una muy buena relación calidad/precio. Nunca falla. Esta muy bien seguido año tras año. Motivo por el cual lo he escogido para regalarlo.",
      },
    ],
    imagenes: [
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png",
      },
      {
        src: "https://vinotecacollado.com/8213-thickbox_default/arzuaga-crianza-2019.jpg",
      },
      {
        src: "https://media-verticommnetwork1.netdna-ssl.com/wines/arzuaga-crianza-1714283.jpg",
      },
      {
        src: "https://d3f5rf6vpkkrog.cloudfront.net/images/valoraciones/0020/9881/vino-arzuaga-navarro-2017.jpg?1576152772",
      },
    ],
  }),
  methods: {
    print: function () {
      console.log(this.selector);
    },
    cambiarImagen: function (src) {
      this.selected = src;
    },
    incrementar: function () {
      this.cantidad += 1;
    },
    decrementar: function () {
      if (this.cantidad != 1) {
        this.cantidad -= 1;
      }
    },
  },
};
</script>
