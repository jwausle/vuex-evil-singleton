<template>
  <v-app>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

import Home from './views/Home.vue';

@Component({
  components: {
    Home
  },
})
export default class App extends Vue {
}
</script>
