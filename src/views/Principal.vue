<template>
  <v-app>
    <div class="pt-3">
      <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiter-background
        height="400"
        class="rounded-lg"
      >
        <v-carousel-item
          v-for="(image, i) in imagesCarousel"
          :key="i"
          :src="image.src"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div
      class="pt-9 d-flex justify-center"
      v-for="(bodega, i) in bodegas"
      :key="i"
    >
      <v-card height="230" width="1600" class="rounded-lg" id="card">
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

              <v-card-subtitle class="pb-0">{{
                bodega.localizacion
              }}</v-card-subtitle>
              <v-card-subtitle class="pt-0">{{
                bodega.provincia
              }}</v-card-subtitle>

              <v-card-actions class="ml-2">
                <div>
                  <v-btn text color="success" outlined> visitar </v-btn>
                </div>
              </v-card-actions>
            </div></v-col
          >
          <v-col>
            <div>
              <v-card-text>
                {{ bodega.descripcion }}
              </v-card-text>
            </div>
          </v-col>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Principal",

  mounted() {},

  data: () => ({
    imagesCarousel: [
      { src: "https://theluxonomist.es/wp-content/uploads/2019/10/bodega.jpg" },
      {
        src: "https://rutadelvinocigales.com/wp-content/uploads/2019/01/Bodegas-Concejo-1.jpg",
      },
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
  }),
  methods: {},
};
</script>
/*
https://www.sitiosdeespana.es/articulo/las-15-mejores-bodegas-para-visitar-en-espana
*/


