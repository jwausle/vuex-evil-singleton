<template>
    <div>
     <v-text-field label="Read 'foo.bar' as Prop()" v-model="fooBar"></v-text-field>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import Store from '../store'

@Component
export default class FooFromProp extends Vue {
    @Prop() private foo!:any;

    get fooBar() {
        if(this.foo){
            return this.foo.bar;
        }
    }

    set fooBar(newFooBar:string){
        //{ bar: 'store value' }
        const localFoo = Store.state.foo;

        this.foo.bar = newFooBar;
        if( localFoo.bar === this.foo.bar) {
            console.log('>>> Who the fuck changed the localFoo value.');
        }

        const localFooFreshFromStore = Store.state.foo;
        if( localFooFreshFromStore.bar === this.foo.bar) {
            console.log('>>> Who the fuck changed the store value.');
        }
    }
}
</script>
