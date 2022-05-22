<template>
  <v-banner two-line app outline elevation="20" style="background-color: #024C80; height: 180px;">
    <div class="col-md-7" style=" height: 145px;" >
     <v-img style="

top: 28.96%;
margin-left: 60px;
margin-top:-20px;"

  lazy-src="https://i.ibb.co/sFb0pz5/penanglogo.png"
  max-height="90"
  max-width="90"
  src="https://i.ibb.co/sFb0pz5/penanglogo.png"
></v-img>
    <div  style="margin-top:-45px!important; margin-left: 180px !important; color:white; position: absolute; font-family: Montserrat !important; font-size: 18px;font-weight: 700;" >
      <p>My KADUN (Officer)</p>

      <div>Area: N23 - Air Putih</div>

    </div>
    </div>
    <div class="col-md-12" style="margin-left:45%; margin-top:-82px; ">
 
    <v-col style="font-family:Montserrat!important; font-style: normal;font-weight: 700;" >
        <template>
          <v-btn text color="white" > Application </v-btn>
          <v-btn text color="white"> Bantuan Segera</v-btn>
           <v-btn text color="white"> Event</v-btn>
          <v-btn text color="white">Officer</v-btn>

        </template>
      </v-col>
    </div>


  </v-banner>

</template>


<style>
  @import 'https://pagecdn.io/lib/easyfonts/fonts.css';
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BannerVue",

  data: () => ({
    //
  }),
});
</script>