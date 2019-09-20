<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻  Ángel Music
          .nav-right.nav-menu
            router-link.nav-item(to="/") Search
            router-link.nav-item(to="about") Us
    .hero-body
      .container.has-text-centered
        h1.title Ángel Music
        h2.subtitle Canciones que estan Vue-nisimas!
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components:{PmPlayer}
}
</script>
