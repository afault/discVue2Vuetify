<template>
  <v-banner two-line app outline elevation="20">
    <div class="col-md-12">
      <h2>Directory</h2>
    </div>
    <div class="col-md-12">
      <v-col>
        <template>
          <v-btn text color="deep-purple accent-4"> Get Online </v-btn>
          <v-btn text color="deep-purple accent-4"> Get Online </v-btn>
        </template>
      </v-col>
    </div>
  </v-banner>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BannerVue",

  data: () => ({
    //
  }),
});
</script>