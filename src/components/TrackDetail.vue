<template lang="pug">
  .container
    .columns
      .column.is-3.text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(@click="selectTrack")

      .column.is-8
        .panel
          .panel-heading
            h1.title {{track.name}}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(value, key) in track")
                    li
                      strong {{key}}:&nbsp
                      span {{value}}
              nav.level
                .level-lef
                  a.level-item
</template>

<script>

import trackService from '@/services/track.js'
import trackMixin from '@/mixins/track.js'

export default {
  mixins: [ trackMixin ],
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
