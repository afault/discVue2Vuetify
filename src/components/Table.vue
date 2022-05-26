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
          <v-select
            :items="statusItems"
            v-model="statusDefaultValue"
            label="Status"
          ></v-select>
          <!-- <v-menu bottom offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" v-on="on">
                Status
                <div class="mx-10"></div>
                <v-icon>mdi-chevron-down</v-icon></v-btn
              >
            </template>
            <v-list>
              <v-list-item
                v-for="(statusItem, index) in statusItems"
                :key="index"
                link
              >
                <v-list-item-title>{{ statusItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
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
      >
      <template v-slot:[`item.details`]="{ item }">
        <td><router-link :to="item.details"
            style="text-decoration: none">View</router-link> </td>
      </template>
      </v-data-table>
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
      statusDefaultValue: null,
      statusItems: [
        {
          text: "All",
          value: null,
        },
        {
          text: "Active",
          value: "Active",
        },
        {
          text: "Inactive",
          value: "Inactive",
        },
      ],
      users: [
        {
          name: "Ryan Beh",
          role: "Admin",
          lastLogin: "30 / 04 / 2022",
          status: "Active",
          details: "/KadunOfficerView",
        },
        {
          name: "Tan Wei Lee",
          role: "KADUN Officer",
          lastLogin: "22 / 03 / 2022",
          status: "Active",
          details: "/KadunOfficerView",
        },
        {
          name: "Kumar A/L Sugumaran",
          role: "KADUN Approval",
          lastLogin: "21 / 03 / 2022",
          status: "Active",
          details: "/KadunOfficerView",
        },
        {
          name: "Xavier Ooi",
          role: "KADUN Approval",
          lastLogin: "22 / 01 / 2022",
          status: "Inactive",
          details: "/KadunOfficerView",
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
          filter: this.nameFilter,
        },
        { text: "Role", value: "role" },
        { text: "Last Login", value: "lastLogin" },
        { text: "Status", value: "status" , filter: this.statusFilter  },
        { text: "Details", value: "details"},
      ];
    },
  },
  methods: {
    /**
     * Filter for calories column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    nameFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.search) {
        return true;
      }

      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.search.toLowerCase());
    },
    statusFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.statusDefaultValue) {
        return true;
      }

      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value === this.statusDefaultValue;
    },
  },
});
</script>
