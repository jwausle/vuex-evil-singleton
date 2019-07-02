<template>
   <div>
    <v-text-field label="Read 'foo.bar' from Store" v-model="fooBar"></v-text-field>
   </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import Store from '../store'

@Component
export default class FooFromStore extends Vue {
    private foo:any = { bar: '' };

    private mounted() {
        //{ bar: 'store value' }
        this.foo = Store.state.foo;
        //this.foo = Store.getters.fooCopy;
    }

    get fooBar() {
        return this.foo.bar;
    }

    set fooBar(newFooBar:string){
        //{ bar: 'store value' }
        const localFoo = Store.state.foo;

        this.foo.bar = newFooBar;
        if( localFoo.bar === this.foo.bar) {
            console.log('>>> Who the fuck changed the localFoo value.');
        }

        const localFooFreshFromStore = this.$store.state.foo;
        if( localFooFreshFromStore.bar === this.foo.bar) {
            console.log('>>> Who the fuck changed the store value.');
        }
    }
}
</script>
