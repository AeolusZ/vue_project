<template>
    <div>
        打开控制台查看流程
        <ol>
            <li v-for="item in lifeCycleData" :key="item">{{item}}</li>
        </ol>
    </div>
</template>
<script>
export default {
    name: 'lifeCycle',
    data(){
        return {
            lifeCycleData: []
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
        console.log('此时data还未加载')
    },
    created(){
        console.log('created')
        this.lifeCycleData.push('create钩子函数')
    },
    beforeMount(){
        console.log('beforeMount')
        this.lifeCycleData.push('beforeMount钩子函数')
    },
    mounted(){
        console.log('mounted')
        this.lifeCycleData.push('mounted钩子函数')
    },
    beforeUpdate(){
        console.log('beforeUpdate', this.lifeCycleData)
    },
    updated(){
        console.log('updated', this.lifeCycleData)
    },
    beforeDestroy(){
        console.log('beforeDestroy')
        this.lifeCycleData.push('beforeDestroy钩子函数')
    },
    destroyed(){
        console.log('destroyed')
        this.lifeCycleData.push('destroyed钩子函数')
    }
}
</script>