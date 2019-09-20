<template lang="pug">
  .container
    .columns
      .column
      .column
        .notification.is-danger(v-show="notification")
          slot(name="body") Notificacion default
        .notification.is-success(v-show="!notification")
          slot(name="body") Notificacion default
      .column    
</template>

<script>
  export default {
    props:{
      notification:{
        type:Boolean,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notification{
    margin: 10px
  }
</style>



