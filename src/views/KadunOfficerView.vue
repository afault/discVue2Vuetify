<template>
  <v-app>
    <HeaderVue />
    <BannerVue />
    <v-main>
      <v-container>
      <v-subheader style="margin:10px;"><h1>Officer</h1></v-subheader>
        <TableVue />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderVue from "../components/Header.vue";
import BannerVue from "../components/Banner.vue";
import TableVue from "../components/Table.vue";

export default Vue.extend({
  name: "KadunOfficerView",
  data: () => ({
    //
  }),
  components: { HeaderVue, BannerVue, TableVue },
});
</script>