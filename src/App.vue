<template>
  <v-app app>
    <navbar />

    <v-main class="mx-2 mb-4 pt-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

import store from "./store";

export default {
  components: { Navbar },
  name: "App",
  store,
};
</script>

<!--
<style>
#app {
  background-image: url(https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg);
  background-repeat: no-repeat;

  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
#card {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
#texto {
  color: white;
}
</style>
-->
