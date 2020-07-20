<template lang="pug">
a(class="block px-4 py-2 account-link hover:text-white")
  slot
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const DropdownItem = defineComponent({

});

export default DropdownItem;
</script>

<style lang="stylus" scoped>
a:hover
  background var(--dropdown-item-hover-background, #3d68ff)
</style>