<template>
  <div>
    App
    <p>{{$store.state.username}}</p>
    <p>{{$store.getters['newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
    const mutationsFn = () => {
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
