<template>
  <v-app class="ma-0 pa-0">


    <div
      v-if="!$store.getters.darkMode"
      style="background: #d9d9d9"
      class="pt-5"
    >
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
                <h3 v-if="$store.getters.currentLenguaje ==='es'">NUESTRO BUQUE INSIGNIA</h3>
                <h3 v-if="$store.getters.currentLenguaje ==='en'">OUR FLAGSHIP WINE</h3>
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
                  <h3 v-if="$store.getters.currentLenguaje ==='es'" class="pt-3">(153 valoraciones)</h3>
                  <h3 v-if="$store.getters.currentLenguaje ==='en'" class="pt-3">(153 ratings)</h3>
                </v-row>

                <p v-if="$store.getters.currentLenguaje ==='es'" class=" body-1">{{ producto.descripcion }}</p>
                <p v-if="$store.getters.currentLenguaje ==='en'" class=" body-1">{{ producto_en.descripcion }}</p>
                <v-row class="pt-4 pl-3 pb-4"
                  ><h2 v-if="$store.getters.currentLenguaje ==='es'" class="mr-8">Cantidad</h2>
                  <h2 v-if="$store.getters.currentLenguaje ==='en'" class="mr-8">Quantity</h2>
                  <div
                    class="d-flex rounded-lg"
                    style="
                      background: #dedede;
                      box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
                    "
                  >
                    <v-btn min-width="4" width="4" text @click="decrementar()"
                      ><h2 class="">-</h2></v-btn
                    >

                    <h3 class="mt-1 mx-5">{{ cantidad }}</h3>
                    <v-btn min-width="4" width="4" text @click="incrementar()"
                      ><h2 class="">+</h2></v-btn
                    >
                  </div>

                  <div v-if="$store.getters.currentLenguaje ==='es'">
                    <v-btn text
                    v-if="$store.getters.logueado"
                    class="ml-16 custom_button"
                    router
                    to="/Cesta"
                    >Añadir al carro</v-btn
                  >
                  <v-btn text
                    v-if="!$store.getters.logueado"
                    class="ml-16 custom_button"
                    router
                    to="/Login"
                    >Comprar</v-btn
                  >
                  </div>
                  <div v-if="$store.getters.currentLenguaje ==='en'">
                    <v-btn text
                    v-if="$store.getters.logueado"
                    class="ml-16 custom_button"
                    router
                    to="/Cesta"
                    >Add to cart</v-btn
                  >
                  <v-btn text
                    v-if="!$store.getters.logueado"
                    class="ml-16 custom_button"
                    router
                    to="/Login"
                    >buy</v-btn
                  >
                  </div>

                  
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="my-5 ml-16">
        <div class="ml-4" v-if="$store.getters.currentLenguaje ==='es'">
          <h2 class="ml-16">Opiniones</h2></div>
        <div class="ml-4" v-if="$store.getters.currentLenguaje ==='en'">
          <h2 class="ml-16">Feedback</h2></div>
      </div>
      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div
        class="d-flex justify-center pb-6"
        v-for="(opinion, i) in opiniones"
        :key="i"
      >
        <v-card
          width="1600"
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
          width="1600"
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
      class="pt-5"
    >
      <div class="d-flex justify-center mx-16 mt-6">
        <v-row class="mb-6" no-gutters>
          <v-col md="5" class="ml-16">
            <div
              style="
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
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
                      style="background: #383838"
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
                    style="background: #383838"
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
                background: #292929;
                box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
              "
            >
              <div>
                <h1 class=" grey--text text--lighten-2">{{ producto.nombre }}</h1>
                <h3 v-if="$store.getters.currentLenguaje ==='es'" class=" grey--text">NUESTRO BUQUE INSIGNIA</h3>
                <h3 v-if="$store.getters.currentLenguaje ==='en'" class=" grey--text">OUR FLAGSHIP WINE</h3>
                <h4 class="mb-3 grey--text">RIBERA DEL DUERO</h4>
                <h1 class="pb-2 grey--text">{{ producto.precio }}</h1>
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
                  <h3 v-if="$store.getters.currentLenguaje ==='es'" class="pt-3 grey--text">(153 valoraciones)</h3>
                  <h3 v-if="$store.getters.currentLenguaje ==='en'" class="pt-3 grey--text">(153 ratings)</h3>
                </v-row>

                <p v-if="$store.getters.currentLenguaje ==='es'" class="pb-2 grey--text body-1">{{ producto.descripcion }}</p>
                <p v-if="$store.getters.currentLenguaje ==='en'" class="pb-2 grey--text body-1">{{ producto_en.descripcion }}</p>
                <v-row class="pt-2 pl-3 pb-4"
                  ><h2 v-if="$store.getters.currentLenguaje ==='es'" class="mr-8 grey--text">Cantidad</h2>
                  <h2 v-if="$store.getters.currentLenguaje ==='en'" class="mr-8 grey--text">Quantity</h2>
                  <div
                    class="d-flex rounded-lg"
                    style="
                      background: #292929;
                      box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
                    "
                  >
                    <v-btn min-width="4" width="4" text @click="decrementar()"
                      ><h2 class=" grey--text">-</h2></v-btn
                    >

                    <h3 class="mt-1 mx-5 grey--text">{{ cantidad }}</h3>
                    <v-btn min-width="4" width="4" text @click="incrementar()"
                      ><h2 class=" grey--text">+</h2></v-btn
                    >
                  </div>

                  <div v-if="$store.getters.currentLenguaje ==='es'">
                    <v-btn
                    text
                    v-if="$store.getters.logueado"
                    class="ml-16 custom_buttonb grey--text"
                    router
                    to="/Cesta"
                    >Añadir al carro</v-btn
                  >
                  <v-btn
                    text
                    v-if="!$store.getters.logueado"
                    class="ml-16 custom_buttonb grey--text"
                    router
                    to="/Login"
                    >Comprar</v-btn
                  >
                  </div>
                  <div v-if="$store.getters.currentLenguaje ==='en'">
                    <v-btn
                    text
                    v-if="$store.getters.logueado"
                    class="ml-16 custom_buttonb grey--text"
                    router
                    to="/Cesta"
                    >Add to cart</v-btn
                  >
                  <v-btn
                    text
                    v-if="!$store.getters.logueado"
                    class="ml-16 custom_buttonb grey--text"
                    router
                    to="/Login"
                    >Buy</v-btn
                  >
                  </div>

                  
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="my-5 ml-16">
        <div class="ml-4" v-if="$store.getters.currentLenguaje ==='es'"><h2 class="ml-16 grey--text text--lighten-2">Opiniones</h2></div>
        <div class="ml-4" v-if="$store.getters.currentLenguaje ==='en'"><h2 class="ml-16 grey--text text--lighten-2">Feedback</h2></div>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div
                class="d-flex justify-center pb-6"
                v-for="(opinion, i) in opiniones"
                :key="i"
              >
                <v-card
                  width="1600"
                  class="rounded-lg"
                  style="
                    background: #292929;
                    box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
                    
                  "
                >
                  <v-card-title class="pt-1 grey--text text--lighten-1">{{ opinion.nombre }}</v-card-title>
                  <v-card-subtitle class=" grey--text"> {{ opinion.fecha }}</v-card-subtitle>
                  <div class="pl-4 pr-3 pb-1 grey--text body-1">{{ opinion.opinion }}</div>
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
                  width="1600"
                  class="rounded-lg"
                  style="
                    background: #292929;
                    box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
                    
                  "
                >
                  <v-card-title class="pt-1 grey--text text--lighten-1">{{ opinion.nombre }}</v-card-title>
                  <v-card-subtitle class=" grey--text"> {{ opinion.fecha }}</v-card-subtitle>
                  <div class="pl-4 pr-3 pb-1 grey--text body-1">{{ opinion.opinion }}</div>
                </v-card>
              </div>
      </div>
      
    </div>


  </v-app>
</template>

<script>
export default {
  name: "Evento",

  mounted() {
    this.selected =
      "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png";
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
    producto_en: {
      nombre: "Arzuaga Crianza",
      precio: "23,99 €",
      descripcion:
        "The Tempranillo and Cabernet Sauvignon varieties with which this wine is made belong to the oldest part of our La Planta estate; grown at an altitude of 911 meters above sea level in clay-limestone soils, with limestone bedrock one meter above the surface. The wine is aged for sixteen months in French and American oak barrels.",
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
    opiniones_en: [
      {
        nombre: "Ada",
        fecha: "2020-08-12",
        opinion:
          "I would drink this wine every day if it were not so expensive. For me it is the most underrated winery in Ribera. It is at the level of the best but not as well known. Don't hesitate to buy this or any other arzuaga label.",
      },
      {
        nombre: "Imanol",
        fecha: "2021-08-03",
        opinion:
          "On a par with the similarly priced Matarromera Crianza. It goes great with any meat. A sure hit if you take it to a dinner with friends for example.",
      },
      {
        nombre: "Jorge",
        fecha: "2021-07-27",
        opinion:
          "It is a wonderful wine. There are no words to define it without tasting it. Try it and you will not be disappointed.",
      },
      {
        nombre: "Nacho",
        fecha: "2020-01-08",
        opinion:
          "One of the references of the Ribera del Duero. Meaty, round, polished tannins and powerful in the mouth. Excellent value for money.",
      },
      {
        nombre: "Álvaro",
        fecha: "2019-12-08",
        opinion:
          "Excellent wine, I am not a wine connoisseur, but this wine is delicious, ideal to go to bed warm on these cold autumn nights.",
      },
      {
        nombre: "jesus blanco",
        fecha: "2019-06-12",
        opinion:
          "It is a reference. It also has a very good quality/price ratio. It never fails. It is very well followed year after year. Reason why I have chosen it as a gift.",
      },
    ],
    imagenes: [
      {
        src: "https://www.arzuaganavarro.com/templates/yootheme/cache/crianzaHOME-bcfeeda3.png",
      },
      {
        src: "https://static3.aporvino.com/10336-thickbox_default/arzuaga-crianza-2017.jpg",
      },
      {
        src: "https://catatu.es/imgs_vinos/imagenes/ArzuagaNavarro_ArzuagaCrianza.png",
      },
      {
        src: "https://www.vino-españa.es/images/stories/virtuemart/product/arzuaga-crianza.png",
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
