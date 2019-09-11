<template>
  <div class="setColumnFlex">
    <!-- 页面logo -->
    <div class="app-header"></div>
    <!-- 内容 -->
    <div class="setFlexOne setRowFlex">
      <div class="app-menu">
        <menu-bar></menu-bar>
      </div>
      <div class="app-router setFlexOne">
        <router-view/>
      </div>
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

<style>
.setColumnFlex {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.setRowFlex {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.setFlexOne {
  flex: 1;
}
.app-header {
  height: 80px;
  background-color: coral
}
.app-menu {
  width: 300px;
  height: 800px;
}
.app-router {
  padding-left: 20px;
  background-color: #fff;
}
</style>
