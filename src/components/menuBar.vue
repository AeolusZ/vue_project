<template>
    <el-menu class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <menu-tree></menu-tree>
    </el-menu>
</template>
<script>
import MenuTree from './menuTree'
export default {
    name: 'MenuBar',
    components: {
        'menu-tree': MenuTree
    }
}
</script>

<style scoped>

</style>