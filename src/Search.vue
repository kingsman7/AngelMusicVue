<template lang="pug">
  main
    transition(name="move")
      pm-notification(:notification="showNotification")
        p(slot="body" v-if="showNotification") no se encontraron resultados
        p(slot="body" v-else="showNotification") resultados {{serachMessage}}
    
    transition(name="move")
      pm-loading(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input(
            type="text", 
            placeholder="Search Sons", 
            v-model="searchQuery",
            @keyup.enter="search"
            )
          a.is-info.button.is-large(@click="search") Search
          a.is-danger.button.is-large &times; 
      .container
      
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
              pm-track(
                v-blur="track.preview_url"
                :class="{'is-active': track.id ===selectedTrack }"
                :track="track",
                @select="setSelected"
              )
</template>

<script>
import trackService from '@/services/track';
import PmTrack from '@/components/Track.vue'
import PmLoading from  '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components:{
    PmTrack,
    PmLoading,
    PmNotification
  },
  data () {
    return {
      searchQuery:'',
      tracks:[],
      isLoading : false,
      showNotification: false,
      selectedTrack:''
    }
  },

  computed:{
    serachMessage () {
      return `encontrados: ${this.tracks.length}`
    }
  },
  
  watch:{
    showNotification () {
      if(this.showNotification){
       setTimeout(()=>{
         this.showNotification = false
       }, 3000) 
      }
    }
  },

  methods:{
    search () {
      if (!this.searchQuery){return}
      this.isLoading = true
      trackService.search(this.searchQuery)
      .then(res=>{
        this.showNotification = res.tracks.total === 0
        this.tracks = res.tracks.items
        this.isLoading = false
      }) 
    },
    setSelected (id) {
      this.selectedTrack = id
    }
  }
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
      .results {
        margin-top: 50px;
      }
    
      .is-active {
        border: 3px #23d160 solid;
      }
</style>

