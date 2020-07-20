import { ref, computed } from 'vue';

export function useToggle(initialValue: boolean) {
  let isOn = ref(initialValue);
  let toggle = () => {
    isOn.value = !isOn.value;
  };

  let off = () => {
    isOn.value = false;
  };

  let on = () => {
    isOn.value = true;
  };

  return {
    isOn,
    toggle,
    off,
    on,
  };
}