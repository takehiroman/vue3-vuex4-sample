<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    return {
      // state を呼び出す場合
      count: computed(() => store.state.count),

      // getters を呼び出す場合
      double: computed(() => store.getters.double),

      // mutation を呼び出す場合
      increment: () => store.commit('increment'),

      // action を呼び出す場合
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
