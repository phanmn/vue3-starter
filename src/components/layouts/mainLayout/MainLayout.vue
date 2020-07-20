<template lang="pug">
.flex.relative
  .sidebar-overlay(class="w-full h-full sm:hidden absolute" @click='hideSidebar' v-show='sidebarVisibility')
  aside.sidebar(class="bg-sidebar h-screen absolute sm:relative shadow-xl" v-show='sidebarVisibility')
  main(class="w-full flex flex-col h-screen overflow-y-hidden")
    MainHeader(v-model:sidebarVisibility='sidebarVisibility')
    MainBody
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainHeader from './components/MainHeader.vue';
import MainBody from './components/MainBody.vue';
import { useToggle } from '/@/services/useCollection';

const MainLayout = defineComponent({
  components: {
    MainHeader,
    MainBody,
  },
  setup() {
    let { isOn: sidebarVisibility, off: hideSidebar } = useToggle(true);

    return {
      sidebarVisibility,
      hideSidebar,
    };
  },
});

export default MainLayout;
</script>

<style lang="stylus" scoped>
@import './styles/style.styl'
.sidebar
  width 260px

.sidebar-overlay
  background-color rgba(0, 0, 0, 0.75)
</style>