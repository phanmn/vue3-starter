<template lang="pug">
//- Desktop Header
header(class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex")
  div(class="w-1/2")
  Dropdown(class="w-1/2 flex justify-end")
    template(v-slot:trigger="slotProps")
      button(class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        @click='slotProps.toggleOpen')
        img(src='https://source.unsplash.com/uJ8LNVCBjFQ/400x400')

    template(v-slot:dropdown-item="slotProps")
      DropdownItem(href='#')
        | Account

//- Mobile Header
header(class="w-full bg-sidebar py-5 px-6 sm:hidden")
  div(class="flex items-center justify-between")
    a(href="#" class="text-white text-3xl font-semibold uppercase hover:text-gray-300")
      | Admin

    button(class="text-white text-3xl focus:outline-none" @click='toggleSidebar')
      img(src='../assets/icons/menu.svg' data-src='../assets/icons/menu.svg')
      //- SvgRender(src='../assets/icons/menu.svg')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useToggle } from '/@/services/useCollection';
import Dropdown from '/@/components/shared/Dropdown.vue';
import DropdownItem from '/@/components/shared/DropdownItem.vue';
import SvgRender from '/@/components/shared/SvgRender.vue';

const MainHeader = defineComponent({
  components: {
    Dropdown,
    DropdownItem,
    SvgRender,
  },
  props: {
    sidebarVisibility: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {

  },
  methods: {
    toggleSidebar() {
      this.sidebarVisibility = !this.sidebarVisibility;
      this.$emit('update:foo', this.sidebarVisibility);
    }
  }
});

export default MainHeader;
</script>

<style lang="stylus" scoped>
@import '../styles/style.styl'
</style>