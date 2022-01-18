<template>
  <v-main class="ma-0 pa-0">
    <div v-if="!$store.getters.darkMode" style="background: #d9d9d9">
      <div class="pt-5 d-flex justify-center px-16">
        <v-carousel
          cycle
          show-arrows-on-hover
          hide-delimiter-background
          height="400"
          class="rounded-lg flat"
        >
          <v-carousel-item
            v-for="(image, i) in imagesCarousel"
            :key="i"
            :src="image.src"
          ></v-carousel-item>
        </v-carousel>
      </div>


      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div
        class="pt-9 d-flex justify-center"
        v-for="(bodega, i) in bodegas"
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
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="200" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="3"
              ><div>
                <v-card-title
                  class="text-h5"
                  v-text="bodega.nombre"
                ></v-card-title>

                <v-card-subtitle class="pb-0 body-1">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 body-1">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <v-card-actions class="ml-2">
                  <div>
                    <v-btn text class="custom_button" router to="/Tienda">
                      visitar
                    </v-btn>
                  </div>
                </v-card-actions>
              </div></v-col
            >
            <v-col>
              <div>
                <v-card-text class=" body-1">
                  {{ bodega.descripcion }}
                </v-card-text>
              </div>
            </v-col>
          </div>
        </v-card>
      </div>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div
        class="pt-9 d-flex justify-center"
        v-for="(bodega, i) in bodegas_en"
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
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="200" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="3"
              ><div>
                <v-card-title
                  class="text-h5"
                  v-text="bodega.nombre"
                ></v-card-title>

                <v-card-subtitle class="pb-0 body-1">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 body-1">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <v-card-actions class="ml-2">
                  <div>
                    <v-btn text class="custom_button" router to="/Tienda">
                      visit
                    </v-btn>
                  </div>
                </v-card-actions>
              </div></v-col
            >
            <v-col>
              <div>
                <v-card-text class=" body-1">
                  {{ bodega.descripcion }}
                </v-card-text>
              </div>
            </v-col>
          </div>
        </v-card>
      </div>
      </div>
      


    </div>
    <div v-if="$store.getters.darkMode" style="background: #292929;">
      <div class="pt-5 d-flex justify-center px-16">
        <v-carousel
          cycle
          show-arrows-on-hover
          hide-delimiter-background
          height="400"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
             
          "
        >
          <v-carousel-item
            v-for="(image, i) in imagesCarousel"
            :key="i"
            :src="image.src"
          ></v-carousel-item>
        </v-carousel>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='es'">
        <div
        class="pt-9 d-flex justify-center"
        v-for="(bodega, i) in bodegas"
        :key="i"
      >
        <v-card
          height="230"
          width="1600"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="200" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="3"
              ><div>
                <v-card-title
                  class="text-h5 grey--text text--lighten-2"
                  v-text="bodega.nombre"
                ></v-card-title>

                <v-card-subtitle class="pb-0 grey--text body-1">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 grey--text body-1">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <v-card-actions class="ml-2">
                  <div>
                    <v-btn text class="custom_buttonb grey--text" router to="/Tienda">
                      visitar
                    </v-btn>
                  </div>
                </v-card-actions>
              </div></v-col
            >
            <v-col>
              <div>
                <v-card-text class="body-1 grey--text text--lighten-1">
                  {{ bodega.descripcion }}
                </v-card-text>
              </div>
            </v-col>
          </div>
        </v-card>
      </div>
      </div>

      <div v-if="$store.getters.currentLenguaje ==='en'">
        <div
        class="pt-9 d-flex justify-center"
        v-for="(bodega, i) in bodegas_en"
        :key="i"
      >
        <v-card
          height="230"
          width="1600"
          class="rounded-lg"
          style="
            background: #292929;
            box-shadow:  5px 5px 10px #1a1a1a,-5px -5px 10px #383838;
          "
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="200" tile>
              <v-img :src="bodega.src" class="rounded-lg"></v-img>
            </v-avatar>
            <v-col cols="3"
              ><div>
                <v-card-title
                  class="text-h5 grey--text text--lighten-2"
                  v-text="bodega.nombre"
                ></v-card-title>

                <v-card-subtitle class="pb-0 grey--text body-1">{{
                  bodega.localizacion
                }}</v-card-subtitle>
                <v-card-subtitle class="pt-0 grey--text body-1">{{
                  bodega.provincia
                }}</v-card-subtitle>

                <v-card-actions class="ml-2">
                  <div>
                    <v-btn text class="custom_buttonb grey--text" router to="/Tienda">
                      visit
                    </v-btn>
                  </div>
                </v-card-actions>
              </div></v-col
            >
            <v-col>
              <div>
                <v-card-text class="body-1 grey--text text--lighten-1">
                  {{ bodega.descripcion }}
                </v-card-text>
              </div>
            </v-col>
          </div>
        </v-card>
      </div>
      </div>

      


    </div>

    
  </v-main>
</template>

<script>
export default {
  name: "Principal",

  mounted() {},

  data: () => ({
    imagesCarousel: [
      {
        src: "https://rutadelvinocigales.com/wp-content/uploads/2019/01/Bodegas-Concejo-1.jpg",
      },
      { src: "https://theluxonomist.es/wp-content/uploads/2019/10/bodega.jpg" },
      {
        src: "https://s1.eestatic.com/2020/07/15/curiosidades/cuerpo-humano/dieta-salud-verano_505461235_155807843_1706x960.jpg",
      },
      {
        src: "https://www.fincasdeazabache.com/modules/sphomeslider/images/72d5e486321de61febf34a0f7f16da3d0c716675_LAPLANILLA.jpg",
      },
      {
        src: "https://www.mancomunidaddetentudia.com/portal/wp-content/uploads/2019/07/Sumilleres1.jpg",
      },
      {
        src: "https://www.hogarmania.com/archivos/202105/maridaje-tipos-de-vinos-segun-comidas-y-alimentos-1280x720x80xX.jpg",
      },
    ],
    bodegas: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
        nombre: "Bodegas Arzuaga Navarro",
        localizacion: "Quintanilla de Onésimo",
        provincia: "Valladolid",
        descripcion:
          "En plena Denominación de Origen Ribera del Duero se encuentra una de las mejores bodegas para visitar en España: Arguaza Navarro. Situada en la localidad de Quintanilla de Onésimo, esta bodega ofrece al visitante todo lo necesario para disfrutar de una maravillosa estancia conociendo la cultura del vino. Una extensa finca en la que la flora, la fauna y, por supuesto, los viñedos son protagonistas; dos restaurantes en los que disfrutar de la exquisita gastronomía de la zona, un spa con tratamientos exclusivos de vinoterapia, un acogedor y confortable hotel ideal para descansar y diversas actividades relacionadas con el mundo del vino. Ingredientes que dan lugar a una fantástica experiencia enoturística. ¿Te animas a disfrutar de ella en primera persona?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546631262-ZHCBUSN7180F2CV9U6T8/mejores-bogegas-vivistar-espana-regina.jpg?format=1000w",
        nombre: "Bodegas Regina Viarum",
        localizacion: "Ribera Sacra",
        provincia: "Lugo",
        descripcion:
          "En el corazón de la Ribera Sacra se encuentra Bodegas Regina Viarum. Una bonita bodega que se asoma al maravilloso Cañón del Sil, un maravilloso enclave natural que la enmarca y que es uno de los mejores lugares que ven en Galicia. La uva con la que producen sus vinos, principalmente la mencia y godello, procede de cultivos situados en vertiginosos niveles que desafían la gravedad y que representan la conocida como ‘Viticultura Heroica’. Todos estos factores hacen que Regina Viarum sea una de las mejores bodegas para visitar en España y la convierten en una visita imprescindible para conocer todos los secretos de la elaboración de los vinos de la Denominación de Origen Ribera Sacra y la Viticultura Heroica.",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615803092379-2DD8W4FX2TDWW5WSVKWR/mejores-bodegas-visitar-espana-baigorri.jpg?format=1000w",
        nombre: "Bodegas BAIGORRI",
        localizacion: "Samaniego",
        provincia: "Álava",
        descripcion:
          "En la localidad alavesa de Samaniego, al cobijo de la Sierra de Cantabria, se encuentra Bodegas BAIGORRI, una caja de cristal que encaja a la perfección con el entorno que la enmarca. Diseñada por el arquitecto Iñaki Aspiazu, está orientada al peculiar modo de elaboración de sus vinos y referente de la arquitectura en el paisaje respetando al medio donde se enclava. Un edificio que se adapta a la topografía existente y desarrolla de manera armoniosa todo su programa bajo la superficie a través de sus 7 plantas subterráneas. Un lugar donde se puede contemplar desde cualquier punto y de forma didáctica, cómo se desarrolla el proceso de elaboración del vino en plena vendimia. Sin duda, una de las mejores bodegas para visitar en España, en la que podrás conocer una manera muy especial de elaborar el vino. ¿Te animas a conocerla?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615808503353-1JO2TRNNF6RMTJO2OQNM/mejores-bodegas-visitar-espana-gran-bazan.jpg?format=1000w",
        nombre: "Bodegas GRANBAZÁN",
        localizacion: "Valle del Salnés",
        provincia: "Pontevedra",
        descripcion:
          "Ubicada en el Valle del Salnés, en pleno corazón de las Rías Baixas y a solo 3 kilómetros de Cambados, se encuentra otra de las mejores bodegas para visitar en España: Bodegas GRANBAZÁN. La bodega está semienterrada y es de estilo neoclásico con influencia de Chateau francés y recubierta de azulejos azules haciendo un guiño a las casas indianas gallegas. Su plantación se extiende en una finca con 14 hectáreas de viñedo para el que se utiliza el sistema de “parra”, tan típico las Rías Baixas y de la uva albariño. Ofrece una amplia gama de posibilidades enoturísticas para acercarse al mundo del vino y relajarse mientras se pasea por su viñedo o descubriendo la relevancia de la bodega como pionera en la elaboración de sus vinos. Además, pone a disposición del visitante un amplio abanico de opciones para disfrutar de la fusión entre la enología y la exquisita gastronomía gallega. ¿Qué más se puede pedir?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615818826889-55X8XH2BAATB6SXRYR5N/mejores-bodegas-visitar-espana-berroja.jpg?format=1000w",
        nombre: "Bodega Berroja",
        localizacion: "Reserva de la Biosfera Urdaibai",
        provincia: "Bizkaia",
        descripcion:
          "Enmarcada por la maravillosa Reserva de la Biosfera Urdaibai se encuentra Bodega Berroja. La singularidad y la belleza del paisaje que la rodea la convierten en una de las mejores bodegas para visitar en España. Su edificio, semienterrado, se integra perfectamente con el entorno, respetando el medio natural y rural y ofreciendo unas magníficas vistas de Urdaibai. Cuenta con un extenso viñedo de montaña, con zonas de terrazas, del que surge la uva con la que se elaboran distintos tipos de Txakoli artesanal. Bodega Berroja ofrece múltiples actividades enoturísticas y enogastronómicas, a través de las cuales podrás conocer más de cerca la elaboración de sus Txakolis, con Denominación de Origen Bizkaiko Txakolina, y disfrutar de sus sabores y de la gastronomía de la zona. Un entorno único, una exquisita gastronomía, unas maravillosas vistas y un Txakoli artesanal, ¡está claro que visitarla merece la pena!",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615897575268-L4E80XYPCU3BX1SWW1N5/mejores-bodegas-visitar-espana-luis.jpg?format=1000w",
        nombre: "Bodegas Luis Cañas",
        localizacion: "Villabuena de Álava",
        provincia: "Álava",
        descripcion:
          "Localizada en Villabuena de Álava, en el corazón de la Rioja Alavesa, se encuentra Bodegas Luis Cañas. Una bodega que se ha situado por méritos propios en la élite de la Denominación de Origen Calificada Rioja y en la que la viña es la protagonista indiscutible y clave en la calidad de sus vinos, disponiendo de un viñedo privilegiado. Bodegas Luis Cañas abre sus puertas a todo aquel que quiera conocer sus grandes caldos y su filosofía, desde el viñedo hasta la copa. Dispone de tienda, un Wine Bar para degustar aperitivos y vinos, sala de catas a pie de viña… Es un lugar perfecto para esos espíritus curiosos que desean vivir una experiencia completa descubriendo los secretos que esconden los grandes vinos.",
      },
    ],
    bodegas_en: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",
        nombre: "Arzuaga Navarro Winery",
        localizacion: "Quintanilla de Onésimo",
        provincia: "Valladolid",
        descripcion:
          "In the heart of the Ribera del Duero Denomination of Origin is one of the best wineries to visit in Spain: Arguaza Navarro. Located in the town of Quintanilla de Onésimo, this winery offers visitors everything they need to enjoy a wonderful stay and learn about the culture of wine. An extensive estate where the flora, fauna and, of course, the vineyards are the protagonists; two restaurants where you can enjoy the exquisite gastronomy of the area, a spa with exclusive wine therapy treatments, a cozy and comfortable hotel ideal for relaxing and various activities related to the world of wine. Ingredients that give rise to a fantastic wine tourism experience. Do you dare to enjoy it in first person?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546631262-ZHCBUSN7180F2CV9U6T8/mejores-bogegas-vivistar-espana-regina.jpg?format=1000w",
        nombre: "Regina Viarum Winery",
        localizacion: "Ribera Sacra",
        provincia: "Lugo",
        descripcion:
          "In the heart of the Ribera Sacra is Bodegas Regina Viarum. A beautiful winery that overlooks the wonderful Sil Canyon, a wonderful natural enclave that frames it and is one of the best places to see in Galicia. The grapes with which they produce their wines, mainly mencia and godello, come from crops located on vertiginous levels that defy gravity and represent what is known as 'Heroic Viticulture'. All these factors make Regina Viarum one of the best wineries to visit in Spain and make it an essential visit to learn all the secrets of the elaboration of the wines of the Ribera Sacra Designation of Origin and the Heroic Viticulture.",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615803092379-2DD8W4FX2TDWW5WSVKWR/mejores-bodegas-visitar-espana-baigorri.jpg?format=1000w",
        nombre: "BAIGORRI Winery",
        localizacion: "Samaniego",
        provincia: "Álava",
        descripcion:
          "In the town of Samaniego, in the shelter of the Sierra de Cantabria, is located Bodegas BAIGORRI, a glass box that fits perfectly with the environment that frames it. Designed by the architect Iñaki Aspiazu, it is oriented to the peculiar way of elaboration of its wines and a reference of architecture in the landscape respecting the environment where it is located. A building that adapts to the existing topography and harmoniously develops its entire program below the surface through its 7 subway floors. A place where you can contemplate from any point and in a didactic way, how the winemaking process takes place in the middle of the harvest. Undoubtedly, one of the best wineries to visit in Spain, where you can learn about a very special way of making wine. Do you dare to visit it?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615808503353-1JO2TRNNF6RMTJO2OQNM/mejores-bodegas-visitar-espana-gran-bazan.jpg?format=1000w",
        nombre: "GRANBAZÁN Winery",
        localizacion: "Valle del Salnés",
        provincia: "Pontevedra",
        descripcion:
          "Located in the Salnés Valley, in the heart of the Rías Baixas and only 3 kilometers from Cambados, is another of the best wineries to visit in Spain: Bodegas GRANBAZÁN. The winery is half-buried and is neoclassical style with influence of French Chateau and covered with blue tiles in a nod to the Galician Indian houses. Its plantation extends over an estate with 14 hectares of vineyard for which the vine system is used, so typical of the Rías Baixas and of the Albariño grape. It offers a wide range of wine tourism possibilities to approach the world of wine and relax while strolling through the vineyard or discovering the relevance of the winery as a pioneer in the production of its wines. In addition, it offers visitors a wide range of options to enjoy the fusion between oenology and the exquisite Galician gastronomy. What more could you ask for?",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615818826889-55X8XH2BAATB6SXRYR5N/mejores-bodegas-visitar-espana-berroja.jpg?format=1000w",
        nombre: "Berroja Winery",
        localizacion: "Urdaibai Biosphere Reserve",
        provincia: "Bizkaia",
        descripcion:
          "Framed by the wonderful Urdaibai Biosphere Reserve is Bodega Berroja. The uniqueness and beauty of the surrounding landscape make it one of the best wineries to visit in Spain. Its building, half buried, is perfectly integrated with the environment, respecting the natural and rural environment and offering magnificent views of Urdaibai. It has an extensive mountain vineyard, with terraced areas, from which the grapes used to produce different types of artisanal Txakoli are grown. Bodega Berroja offers multiple wine tourism and enogastronomic activities, through which you can learn more about the elaboration of its Txakolis, with Denomination of Origin Bizkaiko Txakolina, and enjoy its flavors and the gastronomy of the area. A unique environment, an exquisite gastronomy, wonderful views and an artisanal Txakoli, it is clear that visiting it is worth it!",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615897575268-L4E80XYPCU3BX1SWW1N5/mejores-bodegas-visitar-espana-luis.jpg?format=1000w",
        nombre: "Luis Cañas Winery",
        localizacion: "Villabuena de Álava",
        provincia: "Álava",
        descripcion:
          "Located in Villabuena de Álava, in the heart of the Rioja Alavesa, is Bodegas Luis Cañas. A winery that has positioned itself on its own merits in the elite of the Rioja Qualified Designation of Origin and in which the vineyard is the undisputed protagonist and key to the quality of its wines, having a privileged vineyard. Bodegas Luis Cañas opens its doors to anyone who wants to know its great wines and its philosophy, from the vineyard to the glass. It has a store, a Wine Bar to taste appetizers and wines, a tasting room at the foot of the vineyard... It is a perfect place for those curious spirits who want to live a complete experience discovering the secrets that hide the great wines.",
      },
    ],
  }),
  methods: {},
};
</script>
/*
https://www.sitiosdeespana.es/articulo/las-15-mejores-bodegas-para-visitar-en-espana
*/
