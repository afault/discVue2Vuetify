<template>
<div class="lg-12">
  
  <v-card>
    <v-card-title>
      <v-btn depressed color="primary">
        <v-icon>mdi-plus-box</v-icon>
        <div class="mx-1"></div>
        New
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-menu bottom offset-y="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed v-bind="attrs" v-on="on">
              Status
              <div class="mx-10"></div>
              <v-icon>mdi-chevron-down</v-icon></v-btn
            >
          </template>

          <v-list>
            <v-list-item
              v-for="(areaItem, index) in areaItems"
              :key="index"
              link
            >
              <v-list-item-title>{{ areaItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="mx-3"></div>
      <div>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </div>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
    ></v-data-table>
  </v-card>
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TableVue",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Role", value: "role" },
        { text: "Last Login", value: "lastLogin" },
        { text: "Status", value: "status" },
        { text: "Details", value: "details" },
      ],
      areaItems: [
        { title: "Active" },
        { title: "Inactive" },
      ],
      users: [
        {
          name: "Ryan Beh",
          role: "Admin",
          lastLogin: "30 / 04 / 2022",
          status: "Active",
          details: "View",
        },
        {
          name: "Tan Wei Lee",
          role: "KADUN Officer",
          lastLogin: "22 / 03 / 2022",
          status: "Active",
          details: "View",
        },
        {
          name: "Kumar A/L Sugumaran",
          role: "KADUN Approval",
          lastLogin: "21 / 03 / 2022",
          status: "Active",
          details: "View",
        },
        {
          name: "Xavier Ooi",
          role: "KADUN Approval",
          lastLogin: "22 / 01 / 2022",
          status: "Inactive",
          details: "View",
        },
      ],
    };
  },
});
</script>
