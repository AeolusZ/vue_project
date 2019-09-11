<template>
  <div>
    <h1>从state获取的count数据 {{this.$store.state.count}}</h1>
    <h1>从getters获取的count数据 {{this.$store.getters.getCount}}</h1>
    <p>count的值：{{this.$store.state.count}}</p>
    <el-button @click="addOne">加1</el-button>
    <el-button @click="subOne">减10</el-button>
  </div>
</template>

<script>
export default {
  name: 'VuexStore',
  data () {
    return {
     
    }
  },
  mounted(){
    const self = this
  },
  methods: {
    addOne: function() {
      this.$store.dispatch('addOne')
    },
    subOne(){
      this.$store.dispatch('subOne', 10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
