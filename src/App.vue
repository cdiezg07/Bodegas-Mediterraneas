<template>
  <v-app app>
    <div v-if="!$store.getters.darkMode" style="background: #d9d9d9">
      <navbar />

      <v-main class="mx-2 mb-4 pt-0">
        <router-view></router-view>
      </v-main>
    </div>
    <div v-if="$store.getters.darkMode" style="background: #292929">
      <navbar />

      <v-main class="mx-2 mb-4 pt-0">
        <router-view></router-view>
      </v-main>
    </div>
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
.custom_buttonb {
  transition: all 0.3s;
  background: #383838;
  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #383838;
}
.custom_buttonb:hover {
  border: 1px solid rgb(255, 255, 255);
  background: rgb(37, 37, 37);
}
.custom_buttonb:active {
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
.custom_button1b {
  transition: all 0.3s;
  background: #292929;
  box-shadow: inset 4px 4px 12px #1a1a1a, inset -4px -4px 12px #383838;
}
.custom_button1b:hover {
  border: 1px solid rgb(255, 255, 255);
  background: #292929;
}
.custom_button1b:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
</style>

<!-- -->
