<template>
  <div class="home">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xs12>
              <v-img :src="require('../assets/logo.svg')" contain height="50" />
          </v-flex>

          <v-flex mb-4 xs12>
            <v-layout justify-center>
              <h1>Outer 'foo.bar': {{getFoo.bar}}</h1>
            </v-layout>
          </v-flex>

          <v-flex mb-4  >
            <v-layout justify-center>
              <FooFromStore />
            </v-layout>
          </v-flex>

          <v-flex mb-4 xs12>
            <v-layout justify-center>
              <FooFromProp v-bind:foo="getFoo" />
            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
  </div>
</template>

<script lang="ts">

import Store from '../store'
import { Component, Vue } from 'vue-property-decorator';

import FooFromProp from '../components/FooFromProp.vue';
import FooFromStore from '../components/FooFromStore.vue';

@Component({
  components: {
    FooFromProp,
    FooFromStore,
  },
})
export default class Home extends Vue {
  get getFoo() { return Store.state.foo; }
}
</script>
