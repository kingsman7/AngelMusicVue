/* comunicacion de padre a hijo es por props y de hijos a padres es por eventos */

<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-100x100
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          .figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title
            strong {{track.name}}
          p.subtitle.is-6 {{track.artists[0].name}}
      .content
        small {{track.duration_ms | ms-to-mm}}
        nav.level
          .level-left
            button.level-item.button.is-primary
              span.icon.is.small(@click="selectTrack") ▶️
            button.level-item.button.is-warning
              span.icon.is.small(@click="goToTrack(track.id)") Go
</template>

<script>
import trackMixin from '@/mixins/track.js'

  export default {
    mixins: [ trackMixin ],
    
    props:{
      track:{
        type:Object,
        required: true
      }
    },
    
    methods:{
      
      goToTrack (id) {
        if (!this.track.preview_url){return}
        this.$router.push({ name: 'track', params: { id } })
      }
    }
  }
</script>