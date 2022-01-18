<template>
  <v-app>
    <div
      v-if="!$store.getters.darkMode"
      style="background: #d9d9d9"
      class="pt-9"
    >
      <div class="d-flex justify-center">
        <v-card
          height="750"
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

          <div v-if="$store.getters.currentLenguaje ==='es'">
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
              <h3 class="pt-3">4.2 (153 valoraciones)</h3>
              
            </v-row>
          </div>

          <div class="pl-15 mt-12">
            <v-row>
              <v-card
                v-for="(p, i) in descripciones"
                :key="i"
                class="ma-3"
                width="400"
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
                <v-card-subtitle class="pl-15 body-1"> {{ p.desc }}</v-card-subtitle>
              </v-card>
            </v-row>
          </div>
          </div>

          <div v-if="$store.getters.currentLenguaje ==='en'">
            <div class="pl-16 pt-3">
            <v-row class="pl-8">
              <h1 class="pl-2">{{ evento_en.bodega }}</h1>
            </v-row>
          </div>
          <div class="pl-16 pt-6">
            <v-row class="pl-8">
              <h2 class="pl-2">{{ evento_en.nombre }}</h2>
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
              <h3 class="pt-3">4.2 (153 ratings)</h3>
            </v-row>
          </div>

          <div class="pl-15 mt-12">
            <v-row>
              <v-card
                v-for="(p, i) in descripciones_en"
                :key="i"
                class="ma-3"
                width="400"
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
                <v-card-subtitle class="pl-15 body-1"> {{ p.desc }}</v-card-subtitle>
              </v-card>
            </v-row>
          </div>
          </div>

          
        </v-card>
      </div>

      <div class="d-flex justify-center">
        <v-card
          height="1000"
          width="1800"
          class="rounded-lg mt-6"
          style="
            background: #dedede;
            box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
          "
        >
          <h2 class="pl-9 pt-4 py-3" v-if="$store.getters.currentLenguaje ==='es'">
            <v-icon large>mdi-calendar-month-outline</v-icon>
            Hacer reserva
          </h2>
          <h2 class="pl-9 pt-4 py-3" v-if="$store.getters.currentLenguaje ==='en'">
            <v-icon large>mdi-calendar-month-outline</v-icon>
            Make a reservation
          </h2>

          <div class="pa-10 pt-4 rounded-lg">
            <v-row class="fill-height">
              <v-col>
                <v-sheet height="64">
                  <v-toolbar flat>
                    <v-btn
                      outlined
                      class="mr-4"
                      color="grey darken-2"
                      @click="setToday"
                    >
                      Today
                    </v-btn>
                    <v-btn fab text small color="grey darken-2" @click="prev">
                      <v-icon small> mdi-chevron-left </v-icon>
                    </v-btn>
                    <v-btn fab text small color="grey darken-2" @click="next">
                      <v-icon small> mdi-chevron-right </v-icon>
                    </v-btn>
                    <v-toolbar-title v-if="$refs.calendar">
                      {{ $refs.calendar.title }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu bottom right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          outlined
                          color="grey darken-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <span>{{ typeToLabel[type] }}</span>
                          <v-icon right> mdi-menu-down </v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="type = 'day'">
                          <v-list-item-title>Day</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'week'">
                          <v-list-item-title>Week</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'month'">
                          <v-list-item-title>Month</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = '4day'">
                          <v-list-item-title>4 days</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-toolbar>
                </v-sheet>
                <v-sheet height="800">
                  <v-calendar
                    ref="calendar"
                    v-model="focus"
                    color="primary"
                    :events="events"
                    :event-color="getEventColor"
                    :type="type"
                    @click:event="showEvent"
                    @click:more="viewDay"
                    @click:date="viewDay"
                    @change="updateRange"
                  ></v-calendar>
                  <v-menu
                    v-model="selectedOpen"
                    :close-on-content-click="false"
                    :activator="selectedElement"
                    offset-x
                  >
                    <v-card color="grey lighten-4" min-width="350px" flat>
                      <v-toolbar :color="selectedEvent.color" dark>
                        
                        <v-toolbar-title
                          v-html="selectedEvent.name"
                        ></v-toolbar-title>
                        <v-spacer></v-spacer>
                        
                        <v-btn icon>
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-card-text>
                        <span v-html="selectedEvent.details"></span>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn v-if="$store.getters.currentLenguaje ==='es'"
                          text
                          color="secondary"
                          @click="selectedOpen = false"
                        >
                          Reservar
                        </v-btn>
                        <v-btn v-if="$store.getters.currentLenguaje ==='en'"
                          text
                          color="secondary"
                          @click="selectedOpen = false"
                        >
                          Book
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>

      <div class="my-5 ml-16 mt-10">
        <h2 v-if="$store.getters.currentLenguaje ==='es'">Opiniones</h2>
        <h2 v-if="$store.getters.currentLenguaje ==='en'">Feedback</h2>
      </div>
      <div v-if="$store.getters.currentLenguaje ==='es'">
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
          <div class="pl-4 pr-3 pb-1 body-1">{{ opinion.opinion }}</div>
        </v-card>
      </div>
      </div>
      
      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div
        class="d-flex justify-center pb-6"
        v-for="(opinion, i) in opiniones_en"
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
          <div class="pl-4 pr-3 pb-1 body-1">{{ opinion.opinion }}</div>
        </v-card>
      </div>
      </div>

      
    </div>

    <div
      v-if="$store.getters.darkMode"
      style="background: #292929"
      class="pt-9"
    >
      <div class="d-flex justify-center">
        <v-card
          height="750"
          width="1800"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
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
                      background: #292929;
                      box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                    "
                  ></v-img>
                </v-col>
              </div>
            </v-row>
          </div>

          <div v-if="$store.getters.currentLenguaje ==='es'">
  <div class="pl-16 pt-3">
              <v-row class="pl-8">
                <h1 class="pl-2 grey--text text--lighten-2">
                  {{ evento.bodega }}
                </h1>
              </v-row>
            </div>
            <div class="pl-16 pt-6">
              <v-row class="pl-8">
                <h2 class="pl-2 grey--text text--lighten-1">
                  {{ evento.nombre }}
                </h2>
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
                <h3 class="pt-3 grey--text">4.2 (153 valoraciones)</h3>
              </v-row>
            </div>

            <div class="pl-15 mt-12">
              <v-row>
                <v-card
                  v-for="(p, i) in descripciones"
                  :key="i"
                  class="ma-3"
                  height="150"
                  width="400"
                  style="
                    background: #292929;
                    box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                  "
                >
                  <v-card-title class="pt-0 grey--text text--lighten-2">
                    <v-icon
                      v-text="p.icon"
                      large
                      dark
                      class="d-flex justify-center pt-2 pr-2"
                    ></v-icon>
                    <h4>{{ p.nombre }}</h4>
                  </v-card-title>
                  <v-card-subtitle class="pl-15 grey--text body-1">
                    {{ p.desc }}</v-card-subtitle
                  >
                </v-card>
              </v-row>
            </div>
          </div>

          <div v-if="$store.getters.currentLenguaje ==='en'">
  <div class="pl-16 pt-3">
              <v-row class="pl-8">
                <h1 class="pl-2 grey--text text--lighten-2">
                  {{ evento_en.bodega }}
                </h1>
              </v-row>
            </div>
            <div class="pl-16 pt-6">
              <v-row class="pl-8">
                <h2 class="pl-2 grey--text text--lighten-1">
                  {{ evento_en.nombre }}
                </h2>
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
                <h3 class="pt-3 grey--text">4.2 (153 ratings)</h3>
              </v-row>
            </div>

            <div class="pl-15 mt-12">
              <v-row>
                <v-card
                  v-for="(p, i) in descripciones_en"
                  :key="i"
                  class="ma-3"
                  width="400"
                  style="
                    background: #292929;
                    box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                  "
                >
                  <v-card-title class="pt-0 grey--text text--lighten-2">
                    <v-icon
                      v-text="p.icon"
                      large
                      dark
                      class="d-flex justify-center pt-2 pr-2"
                    ></v-icon>
                    <h4>{{ p.nombre }}</h4>
                  </v-card-title>
                  <v-card-subtitle class="pl-15 grey--text body-1">
                    {{ p.desc }}</v-card-subtitle
                  >
                </v-card>
              </v-row>
            </div>
          </div>

          
        </v-card>
      </div>

      <div class="d-flex justify-center">
        <v-card
          height="1000"
          width="1800"
          class="rounded-lg mt-6"
          style="
            background: #292929;
            box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
          "
        >
          <h2 v-if="$store.getters.currentLenguaje ==='es'" class="pl-9 pt-4 py-3 grey--text text--lighten-2">
            <v-icon dark large>mdi-calendar-month-outline</v-icon>
            Hacer reserva
          </h2>
          <h2 v-if="$store.getters.currentLenguaje ==='en'" class="pl-9 pt-4 py-3 grey--text text--lighten-2">
            <v-icon dark large>mdi-calendar-month-outline</v-icon>
            Make a reservation
          </h2>

          <div class="pa-10 pt-4 rounded-lg">
            <v-row class="fill-height">
              <v-col>
                <v-sheet height="64">
                  <v-toolbar flat dark color="grey darken-3">
                    <v-btn dark class="mr-4" @click="setToday"> Today </v-btn>
                    <v-btn fab text dark small @click="prev">
                      <v-icon small dark> mdi-chevron-left </v-icon>
                    </v-btn>
                    <v-btn fab text dark small @click="next">
                      <v-icon small dark> mdi-chevron-right </v-icon>
                    </v-btn>
                    <v-toolbar-title dark v-if="$refs.calendar">
                      {{ $refs.calendar.title }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu bottom right dark>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn outlined dark v-bind="attrs" v-on="on">
                          <span>{{ typeToLabel[type] }}</span>
                          <v-icon right dark> mdi-menu-down </v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="type = 'day'">
                          <v-list-item-title>Day</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'week'">
                          <v-list-item-title>Week</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'month'">
                          <v-list-item-title>Month</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = '4day'">
                          <v-list-item-title>4 days</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-toolbar>
                </v-sheet>
                <v-sheet height="800" dark>
                  <v-calendar
                  dark
                    ref="calendar"
                    v-model="focus"
                    color="primary"
                    :events="events"
                    :event-color="getEventColor"
                    :type="type"
                    @click:event="showEvent"
                    @click:more="viewDay"
                    @click:date="viewDay"
                    @change="updateRange"
                  ></v-calendar>
                  <v-menu
                    dark
                    v-model="selectedOpen"
                    :close-on-content-click="false"
                    :activator="selectedElement"
                    offset-x
                  >
                    <v-card color="grey lighten-2" min-width="350px" flat>
                      <v-toolbar :color="selectedEvent.color" dark>
                        
                        <v-toolbar-title
                          v-html="selectedEvent.name"
                        ></v-toolbar-title>
                        <v-spacer></v-spacer>
                        
                        <v-btn icon>
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-card-text>
                        <span v-html="selectedEvent.details"></span>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn v-if="$store.getters.currentLenguaje ==='es'"
                          text
                          color="secondary"
                          @click="selectedOpen = false"
                        >
                          Reservar
                        </v-btn>
                        <v-btn v-if="$store.getters.currentLenguaje ==='en'"
                          text
                          color="secondary"
                          @click="selectedOpen = false"
                        >
                          Book
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>

      <div class="my-5 ml-16 mt-10 grey--text text--lighten-2">
        <h2 v-if="$store.getters.currentLenguaje ==='es'">Opiniones</h2>
        <h2 v-if="$store.getters.currentLenguaje ==='en'">Feedback</h2>
      </div>
      

      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div
        class="d-flex justify-center pb-6"
        v-for="(opinion, i) in opiniones"
        :key="i"
      >
        <v-card
          width="1750"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
          "
        >
          <v-card-title class="pt-1 grey--text text--lighten-2">{{ opinion.nombre }}</v-card-title>
          <v-card-subtitle class="grey--text"> {{ opinion.fecha }}</v-card-subtitle>
          <div class="pl-4 pr-3 pb-1 grey--text text--lighten-1 body-1">{{ opinion.opinion }}</div>
        </v-card>
      </div>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div
        class="d-flex justify-center pb-6"
        v-for="(opinion, i) in opiniones_en"
        :key="i"
      >
        <v-card
          width="1750"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
          "
        >
          <v-card-title class="pt-1 grey--text text--lighten-2">{{ opinion.nombre }}</v-card-title>
          <v-card-subtitle class="grey--text"> {{ opinion.fecha }}</v-card-subtitle>
          <div class="pl-4 pr-3 pb-1 grey--text text--lighten-1 body-1">{{ opinion.opinion }}</div>
        </v-card>
      </div>
      </div>


      
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Evento",

  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Naturaleza en directo",
      "Descubriendo Arzuaga",
      "Sensaciones enológicas",
      "Taller de cata a cargo de nuestro equipo de sumillería",
    ],

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
    evento_en: {
      nombre: "Tasting workshop conducted by our sommelier team.",
      bodega: "Arzuaga Navarro Winery",
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
    opiniones_en: [
      {
        nombre: "Pablo",
        fecha: "2020-08-12",
        opinion:
          "The tasting workshop was a great experience. Guided by a professional oenologist in a spectacular dining room we tasted the wines of the winery accompanied by special tapas. Everything was smooth and unhurried, enjoying the moment.",
      },
      {
        nombre: "Nerea",
        fecha: "2021-08-03",
        opinion:
          "We had a wonderful time. I had to take this trip in extremis because the place we were going to, the weather failed us. I was quite skeptical because of the reviews, and maybe that's why...since my expectations were not high, I loved the weekend. Of course it is not a 5 star but having said that, the visit to the estate, the two tastings, the two restaurants, the visit to the winery, the proximity to Peñafiel, some time in the spa, a massage (very weak, of course) and so much fun. And the best was the Arzuaga wine. And the wonderful bed.",
      },
      {
        nombre: "Ana",
        fecha: "2021-07-27",
        opinion:
          "Great weekend as a couple. Highly recommended the complete pack of: Spa (Circuit + Wine Spa as a couple), visit to see deer and wild boars, visit to the winery, wine and oil tasting (one of the best tastings I've done), and .... and to top it all off, a special mention to the Restaurant El Taller. Amaya Arzuaga herself makes sure that it is a very careful experience. You leave with a feeling of having disconnected in a unique environment.",
      },
      {
        nombre: "Victor Manuel",
        fecha: "2020-01-08",
        opinion:
          "Winemaking. A lot of work, but very grateful. Extraordinary work environment. The only downside is that they make temporary hires and it is complicated to get job stability, but not impossible, the pay is high!",
      },
      {
        nombre: "elo",
        fecha: "2019-12-08",
        opinion:
          "It is a company dedicated to the production, preservation and aging of wines of all kinds, I have been a wine taster for a couple of years and I am very grateful for the opportunity, I have perfected myself and the salaries are high, plus the colleagues are great.",
      },
      {
        nombre: "Gloria",
        fecha: "2019-06-12",
        opinion:
          "The company focuses on the production, care, harvesting and sale of wines, take advantage of this opportunity to develop your skills and grow in the company. Proactivity, attention to detail and friendliness are important to be part of our great work environment.",
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
    descripciones_en: [
      {
        nombre: "TASTING WORKSHOP",
        desc: "An approach to the knowledge of the world of wine in a pleasant and personal way.",
        icon: "mdi-fruit-grapes-outline",
      },
      {
        nombre: "OUR WINES",
        desc: "Master class on our wines in small groups. With previous reservation.",
        icon: "mdi-bottle-wine",
      },
      {
        nombre: "TASTING WORKSHOP",
        desc: "Saturdays at 6:00 p.m. Approximately two and a half hours where five wines and gastronomic tapas will be tasted.",
        icon: "mdi-clock-time-four-outline",
      },
      {
        nombre: "INITIATION TO TASTING",
        desc: "Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays and Sundays at 12:30 pm. Duration approx. one hour where three wines and gastronomic tapas will be tasted.",
        icon: "mdi-clock-time-nine-outline",
      },
    ],
  }),
  methods: {
    print: function () {
      console.log(this.selector);
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        let random = this.rnd(0, this.names.length - 1);
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          /*name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,*/

          name: this.names[random],
          start: first,
          end: second,
          color: this.colors[random],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
};
</script>
