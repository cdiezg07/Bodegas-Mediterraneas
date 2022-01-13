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

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.selects {
  width: 150px;
}

#app {
  background: #d9d9d9;
}

.flat {
  background: #dedede;
  box-shadow: 5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff;
  
}

.custom_button {
  transition: all 0.3s;
  background: #dbdbdb;
  box-shadow: 3px 3px 8px #b4b4b4, -3px -3px 8px #ffffff;
}
.custom_button:hover {
  border: 1px solid rgb(255, 255, 255);
  background: rgb(255, 255, 255);
}
.custom_button:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
.custom_button1 {
  transition: all 0.3s;
  background: #dbdbdb;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
.custom_button1:hover {
  border: 1px solid rgb(255, 255, 255);
  background: rgb(255, 255, 255);
}
.custom_button1:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
</style>

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
