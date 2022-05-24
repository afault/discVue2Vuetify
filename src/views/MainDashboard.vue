<template>    
  <v-app>
     <HeaderVue/>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HeaderVue from "../components/Header.vue";
   
  export default Vue.extend({
    name: 'MainDashboard',
    data: () => ({
    //
  }),
  components: { HeaderVue },
  })
</script>

<style scoped>
    @import '@/assets/css/styleLogin.css';
    @import 'https://pagecdn.io/lib/easyfonts/fonts.css'
</style>