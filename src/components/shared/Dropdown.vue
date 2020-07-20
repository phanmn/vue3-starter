<template lang="pug">
div(class="relative")
  slot(name="trigger" :toggleOpen='toggleOpen')

  button(v-show='isOpen' @click='hide' class="h-full w-full fixed inset-0 cursor-default")
  div(v-show='isOpen' class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16")
    slot(name="dropdown-item")
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';
import { useToggle } from '/@/services/useCollection';

const Dropdown = defineComponent({
  setup() {
    let { isOn, toggle, on, off } = useToggle(false);

    return {
      isOpen: isOn,
      toggleOpen: toggle,
      hide: off,
    };
  },
});

export default Dropdown;
</script>