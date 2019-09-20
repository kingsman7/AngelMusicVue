<template lang="pug">
  #app
    PmHeader

    router-view  

    PmFooter            
</template>

<script>
import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components:{
    PmHeader,
    PmFooter,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss">
  @import './scss/main.scss';
      .results {
        margin-top: 50px;
      }
    
      .is-active {
        border: 3px #23d160 solid;
      }
</style>

