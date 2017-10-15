<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
import vfooter from "@/components/vfooter.vue"

export default {
  name: 'app',
  components:{
    vfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

<script type="text/javascript">
  import "./assets/css/init.css"
</script>
