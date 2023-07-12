<template>
  <div
    ref="carusel"
    @touchstart.prevent="getTouchInfo(true, swipeStart, $event)"
    @touchmove.prevent="getTouchInfo(true, touchMoveEvent, $event)"
    @touchend.prevent="getTouchInfo(true, swipeEnd, $event)"
    @mousedown.prevent="getTouchInfo(false, swipeStart, $event)"
    @mousemove.prevent="getTouchInfo(false, touchMoveEvent, $event)"
    @mouseup.prevent="getTouchInfo(false, swipeEnd, $event)"
    @mouseleave="getTouchInfo(false, mouseLeaveEvent, $event)"
    class="mobile-carusel"
  >
    <slot> </slot>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
const props = defineProps({
  slip: {type:Number, required: false, default: 800},
})

const carusel = ref(null);
const targetSlide = { value: 0 };


const slidePosition = new Proxy(targetSlide, {
  set(target, prop, val) {
    if (isNaN(val)) {
      return target[prop];
    }
    if (val > 300) {
      return (target[prop] = 300);
    } else if (-val > carusel.value.scrollWidth - 300) {
      return (target[prop] = -carusel.value.scrollWidth + 300);
    } else {
      return (target[prop] = val);
    }
  },
  get(target, prop) {
    return target[prop];
  },
});

let slideStart,
  slideEnd = 0;
let time;
let pointerDown = false;
const getTouchInfo = (status, callBack, event) => {
  if ("ontouchstart" in window === status) {
    callBack(event);
  }
};
const setStyleCarusel = (transform = 0, time = 0) => {
  carusel.value.style = `transition-duration: ${time}ms; transform: translateX(${transform}px)`;
};

const getPositionX = (target) => {
  if (!!target.changedTouches) return target.changedTouches[0].clientX;
  return target.clientX;
};

const swipeStart = (event) => {
  slideStart = slideEnd = getPositionX(event);
  time = event.timeStamp;

  pointerDown = true;
};
const touchMoveEvent = (event) => {
  if (!pointerDown) return;
  slideEnd = slideStart - getPositionX(event);
  slideStart = getPositionX(event);
  slidePosition.value = slidePosition.value - slideEnd;

  setStyleCarusel(slidePosition.value);
};
const swipeEnd = (event) => {
  pointerDown = false;
  time = event.timeStamp - time;
  if (slideStart === slideEnd) return;
  const speed = slideEnd / time;
  const speedTime = Math.abs(speed) * 1000;
  slidePosition.value = slidePosition.value - props.slip * speed;
  setStyleCarusel(slidePosition.value, speedTime);
  setTimeout(
    () => {
      setStyleCarusel(slidePosition.value);
    },
    speedTime >= 1000 ? 1000 : speedTime
  );
};

const mouseLeaveEvent = () => (pointerDown = false);
</script>
  
<style lang="scss">
.mobile-carusel {
    display: flex;
    flex-wrap: nowrap;
    column-gap: 16px;
    transition-timing-function: ease-out;
  }
</style>