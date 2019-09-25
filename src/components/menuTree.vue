<template>
<div>
    <el-submenu v-if="menu.children && menu.children.length > 0" :index="String(menu.index)">
        <template slot="title">{{menu.name}}</template>
        <el-menu-item v-for="childMenu in menu.children" :key="childMenu.index" :index="childMenu.url">
            {{childMenu.name}}
        </el-menu-item>
    </el-submenu>
    <el-menu-item v-else :index="menu.url">{{menu.name}}</el-menu-item>
</div>
</template>
<script>
export default {
    name: 'MenuTree',
    props: ['menu'],
    mounted(){
        // console.log(this.menu)
    } 
}
</script>