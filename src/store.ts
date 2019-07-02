import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: { bar: 'stored value' },
  },
  getters: {
    // foo(state) { return state.foo; }, // === Store.state.foo
    // fooCopy(state) { return { ...state.foo }; },
    // fooCopy(state) { return Object.assign({}, state.foo); },
  },
  mutations: {
    // setFoo(state, foo) { state.foo = foo;} // Erste Idee
    // setBar(state, bar) { state.foo.bar = bar; } // Besser
  },
  actions: { },
});
