<template>
    <el-menu 
      router
      background-color="#545c64" 
      text-color="#fff" 
      active-text-color="#ffd04b" >
        <menu-tree v-for="item in this.$store.state.menuTree" :key="item.index" :menu="item"></menu-tree>
    </el-menu>
</template>
<script>
import MenuTree from './menuTree'
export default {
    name: 'MenuBar',
    components: {
      'menu-tree': MenuTree
    },
    mounted(){
        this.$store.dispatch('getMenuTree')
        console.log(this.$store.state.menuTree)
    },
    methods: { 
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>

</style>