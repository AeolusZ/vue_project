<template>
  <div class="hello">
    <h1>Welcome to My System !</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.hello {
  text-align: center;
}
h1, h2 {
  font-size: 64px;
  font-weight: normal;
}
</style>
