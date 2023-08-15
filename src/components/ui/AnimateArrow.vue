<template>
  <svg
    :style="`transform: rotate(${active ? props.angle.end: props.angle.start}deg);`"
    class="animate-arrow"
    width="100%"
    stroke-width="2"
    height="100%"
    viewBox="15 15 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 20.002L36 30.002L26 40.002"
      stroke="#7B4AE2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
const props = defineProps({
  active: { type: Boolean, required: false, default: false },
  angle: { type: Object, required: false, default: { start: 0, end: 90 } },
});
</script>
<style lang="scss" scoped>
.animate-arrow {
  transition: transform 0.3s;
  cursor: pointer;
}
</style>
