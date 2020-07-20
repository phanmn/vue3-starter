<template lang="pug">
router-view
</template>

<script>
import '/@/styles/style.css';
// https://github.com/posva/vite-tailwind-starter

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="stylus">
@import './styles/style.styl'

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>