<template>
  <v-app>
    <HeaderVue />
    <v-main>
      <div>
      <BannerVue /></div>
      <v-container> <TableVue /> </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderVue from "./Header.vue";
import BannerVue from "./Banner.vue";
import TableVue from "./Table.vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  components: { HeaderVue, BannerVue, TableVue },
});
</script>


