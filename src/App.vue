<template>
  <div class="app">
    <div class="app-menu">
      <menu-bar></menu-bar>
    </div>
    <div class="app-router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/menuBar'
export default {
  name: 'App',
  data(){
    return {
      menuBar: {
        width: '100px'
      }
    }
  },
  components: {
    'menu-bar': MenuBar
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.app-menu {
  width: 300px;
}
.app-router {
  flex: 1;
  padding-left: 20px
}
</style>
