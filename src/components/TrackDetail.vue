<template lang="pug">
  .container
    .columns
      .column
      .column.is-5
        pm-track(:track="track")
      .column  
</template>

<script>

import trackService from '@/services/track.js'
import PmTrack from './Track.vue'

export default {
  components:{ PmTrack },

  data(){
    return{
      track:{}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then( res => {
        this.track = res
      })
  },
}
</script>

<style lang="scss" scoped>
  .column{
    margin: 10px;
  }
</style>
