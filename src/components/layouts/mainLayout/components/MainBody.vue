<template lang="pug">
div(class="w-full overflow-x-hidden border-t flex flex-col")
  main(class="w-full flex-grow p-6")
    router-view
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const MainBody = defineComponent({

});

export default MainBody;
</script>