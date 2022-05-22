<template >

  <v-app-bar dense app >
<meta name="viewport" content="width=1024">

    <div class="mx-1" ></div>
    <div class="d-flex align-center" >
      <v-btn depressed> <v-app-bar-title style="color:#024C80; font-family:'Poppins; font-size: 35.8208px;"  >D I S C</v-app-bar-title></v-btn>
    </div>
    <div class="mx-3"></div>
    <v-btn depressed Montserrat  style="font-family: Montserrat;"> Dashboard </v-btn>
    <div class="mx-3"></div>
    <v-menu bottom offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on"  style="font-family: Montserrat;"> Services </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(serviceItem, index) in serviceItems"
          :key="index"
          link
        >
          <v-list-item-title>{{ serviceItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="mx-3"></div>
    <v-menu bottom offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on"  style="font-family: Montserrat;"> Directory </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(directoryItem, index) in directoryItems"
          :key="index"
          link
        >
          <v-list-item-title>{{ directoryItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="mx-3"></div>
    <v-menu bottom offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on" style="font-family: Montserrat;"> Report </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(reportItem, index) in reportItems"
          :key="index"
          link
        >
          <v-list-item-title>{{ reportItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>

    <v-badge bordered top color="red accent-4" dot offset-x="10" offset-y="10">
      <v-icon>mdi-bell</v-icon>
    </v-badge>

    <div class="mx-3"></div>
    <v-menu bottom offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on">
          <v-icon large>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(accountItem, index) in accountItems"
          :key="index"
          link
        >
          <v-list-item-title>{{ accountItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>


<style>
  @import 'https://pagecdn.io/lib/easyfonts/fonts.css';
</style>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderVue",

  data: () => ({
    serviceItems: [
      { title: "eTicket" },
      { title: "Bantuan Segera" },
      { title: "Follow-Up" },
      { title: "Join Event" },
    ],
    directoryItems: [
      { title: "Customer Directory" },
      { title: "KADUN Directory" },
    ],
    reportItems: [
      { title: "eTicket" },
      { title: "Bantuan Segera" },
      { title: "Disbursement" },
      { title: "Event Attendance List" },
    ],
    accountItems: [
      { title: "My KADUN" },
      { title: "My Account" },
      { title: "Logout" },
    ],
  }),
});
</script>


