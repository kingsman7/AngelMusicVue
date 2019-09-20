/* comunicacion de padre a hijo es por props y de hijos a padres es por eventos */

<template lang="pug">
  .card
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
        small {{track.duration_ms}}
        nav.level
          .level-left
            a.level-item
              span.icon.is.small(@click="selectTrack") ▶️
</template>

<script>
  export default {
    props:{
      track:{
        type:Object,
        required: true
      }
    },

    methods:{
      selectTrack () {
      //Emite el evento desde el componente hijo al comonente padre con un $emit
      //este #emit resive parametros; 
      //el nombre del evento que estara en el componente padre
      //la información a pasar
        this.$emit('select', this.track.id)
        this.$bus.$emit('set-track', this.track)
      }
    }
  }
</script>