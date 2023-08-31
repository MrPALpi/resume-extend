<template>
  <input type="hidden" />
  <Transition name="fade">
    <div ref="choice" v-show="show" class="drop-down__choice">
      <slot name="input"></slot>
      <div class="drop-down__choice-scroll">
        <slot> </slot>
      </div>
    </div>
  </Transition>
</template>
 
 <script setup>
const props = defineProps({
  show: { type: Boolean, required: true },
});
</script>
 
 <style lang="scss" scoped>
.drop-down__choice {
  position: absolute;
  top: 100%;
  margin-top: 5px;
  padding: 10px 5px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--accent-50);
  background: var(--background);
  color: var(--accent);
  z-index: 2;

  &-scroll {
    scrollbar-gutter: stable;
    padding-top: 10px;
    max-height: 250px;
    overflow: auto;
    display: grid;
    gap: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: top center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>