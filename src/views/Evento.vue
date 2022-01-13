<template>
  <v-app class="pt-5">
    <div class="d-flex justify-center">
      <v-card
        height="990"
        width="1800"
        class="rounded-lg"
        style="
          background: #dedede;
          box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
        "
      >
        <div>
          <v-row align="start" no-gutters>
            <div v-for="(src, i) in srcs" :key="i" class="ma-4 pl-8">
              <v-col>
                <v-img
                  height="300"
                  max-width="500"
                  :src="src"
                  class="rounded-lg"
                  style="
                    background: #dedede;
                    box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
                  "
                ></v-img>
              </v-col>
            </div>
          </v-row>
        </div>

        <div class="pl-16 pt-3">
          <v-row class="pl-8">
            <h1 class="pl-2">{{ evento.bodega }}</h1>
          </v-row>
        </div>
        <div class="pl-16 pt-6">
          <v-row class="pl-8">
            <h2 class="pl-2">{{ evento.nombre }}</h2>
          </v-row>
        </div>
        <div class="pl-16 pt-9">
          <v-row class="pl-8">
            <v-rating
              hover
              half-increments
              length="5"
              size="30"
              value="4.5"
              background-color="orange lighten-3"
              color="orange"
            ></v-rating>
            <h3 class="pt-3">4.2</h3>
            <h3 class="pt-3">(153 valoraciones)</h3>
          </v-row>
        </div>
        <v-row class="mb-6" no-gutters>
          <v-col md="4" class="pl-8">
            <div class="ml-16 mt-8" style="width: 800px">
              <v-row>
                <v-col v-for="(p, i) in descripciones" :key="i" cols="5">
                  <v-card
                    class="ma-3"
                    height="160"
                    style="
                      background: #dedede;
                      box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
                    "
                  >
                    <v-card-title class="pt-0">
                      <v-icon
                        v-text="p.icon"
                        large
                        class="d-flex justify-center pt-2 pr-2"
                      ></v-icon>
                      <h4>{{ p.nombre }}</h4>
                    </v-card-title>
                    <v-card-subtitle class="pl-15">
                      {{ p.desc }}</v-card-subtitle
                    >
                  </v-card>
                </v-col></v-row
              >
            </div>
          </v-col>
          <v-col md="4" offset-md="3">
            <div
              class="pb-2 rounded-lg"
              style="
                background: #dedede;
                box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
              "
            >
              <h2 class="pl-4 pt-4">
                <v-icon large>mdi-calendar-month-outline</v-icon>
                Hacer reserva
              </h2>
              <div class="ma-5">
                <v-date-picker
                  full-width
                  elevation="1"
                  class="pb-1"
                  v-model="picker"
                ></v-date-picker>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div class="my-5 ml-16">
      <h2>Opiniones</h2>
    </div>
    <div
      class="d-flex justify-center pb-6"
      v-for="(opinion, i) in opiniones"
      :key="i"
    >
      <v-card
        width="1750"
        class="rounded-lg"
        style="
          background: #dedede;
          box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
        "
      >
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

  mounted() {},

  data: () => ({
    picker: null,

    srcs: {
      src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
      src1: "https://www.meet-in.es/wp-content/uploads/2017/06/Bodegas_00-640x427.jpg",
      src2: "https://www.torres.es/sites/default/files/enoturismo_1.jpg",
    },
    evento: {
      nombre: "Taller de cata a cargo de nuestro equipo de sumillería.",
      bodega: "Bodegas Arzuaga Navarro",
    },
    //https://es.gowork.com/bodegas-arzuaga-navarro-lerma
    //https://www.tripadvisor.es/ShowUserReviews-g1072462-d2663333-r821150940-Bodegas_Arzuaga_Navarro-Quintanilla_de_Onesimo_Province_of_Valladolid_Castile_a.html
    opiniones: [
      {
        nombre: "Pablo",
        fecha: "2020-08-12",
        opinion:
          "El Taller de cata fué una experiencia estupenda. Guiados por una enóloga profesional en un comedor espectacular probamos los vinos de la bodega acompañadas de unas especiales tapas. Todo fluido y sin prisas, disfrutando el momento.",
      },
      {
        nombre: "Nerea",
        fecha: "2021-08-03",
        opinion:
          "Pues lo pasamos divinamente. Tuve que coger este viaje in extremis porque el sitio al que íbamos nos falló el tiempo. Iba bastante exceptica por las criticas, y quizás por eso...como las expectativas no eran altas, me encantó el finde. Desde luego no es un 5 estrellas pero dicho esto la visita a la finca, las dos catas, los dos restaurantes, visita a la bodega, la cercanía de Peñafiel, un rato en el spa, un masaje (muy flojito eso si) y tan agusto . Y lo mejor el vino Arzuaga. Y la maravillosa cama.",
      },
      {
        nombre: "Ana",
        fecha: "2021-07-27",
        opinion:
          "Estupendo fin de semana en pareja. Muy recomendable el pack completo de: Spa (Circuito+Spa de vino en pareja), visita a ver ciervos y jabalíes, Visita de la Bodega, Cata de vino y aceite (de las mejores catas que he hecho), y... de colofón mención especial el Restaurante El Taller. Amaya Arzuaga en persona se encarga de que sea una experiencia muy cuidada. Sales con una sensación de haber desconectado en un entorno único.",
      },
      {
        nombre: "Victor Manuel",
        fecha: "2020-01-08",
        opinion:
          "Elaboración de vinos. Mucho trabajo, pero muy agradecido. Ambiente de trabajo extraordinario. La única pega es que se hacen contrataciones temporales y es complicado conseguir estabilidad laboral, pero no imposible la paga es alta!",
      },
      {
        nombre: "elo",
        fecha: "2019-12-08",
        opinion:
          "Es una compañía dedicada a la elaboración, conservacion y crianza de vinos de todo tipo, soy catadora hace un par de años y estoy muy agradecida por la oportunidad, me he perfeccionado y los sueldos son altos, ademas los colegas son una pasada.",
      },
      {
        nombre: "Gloria",
        fecha: "2019-06-12",
        opinion:
          "La compañia se centra en la elaboración, cuidado, cosecha y venta de vinos, aprovecha esta oportunidad para desarrollar tus habilidades y crecer en la empresa. Es importante la proactividad, la atención a los detalles y la amabilidad para formar parte de nuestro gran ambiente laboral.",
      },
    ],
    descripciones: [
      {
        nombre: "TALLER DE CATA",
        desc: "Un acercamiento al conocimiento del mundo del vino de una forma amena y personal.",
        icon: "mdi-fruit-grapes-outline",
      },
      {
        nombre: "NUESTROS VINOS",
        desc: "Clase magistral sobre nuestros vinos en grupos reducidos. Con reserva previa.",
        icon: "mdi-bottle-wine",
      },
      {
        nombre: "TALLER DE CATA",
        desc: "Sábados a las 18:00 h.Duración aprox. dos horas y media donde se catarán cinco vinos y tapas gastronómicas.",
        icon: "mdi-clock-time-four-outline",
      },
      {
        nombre: "INICIACIÓN A LA CATA",
        desc: "Martes, miércoles, jueves,viernes, sábados y domingo 12:30h. Duración aprox. una hora donde se catarán tres vinos y tapas gastronómicas.",
        icon: "mdi-clock-time-nine-outline",
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
