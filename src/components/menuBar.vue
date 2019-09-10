<template>
    <el-menu 
      router 
      background-color="#545c64" 
      text-color="#fff" 
      active-text-color="#ffd04b" >
        <el-submenu v-for="item in this.$store.state.menuTree" :key="item.index" :index="item.index" class="menu-sub">
           <template slot="title">{{item.name}}</template>
           <el-menu-item v-for="childItem in item.children" :key="childItem.index" :index="childItem.url" class="menu-item">
             {{childItem.name}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>

export default {
    name: 'MenuBar',
    props: ['class'],
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