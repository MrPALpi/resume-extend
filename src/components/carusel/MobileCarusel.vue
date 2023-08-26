<template>
  <div
    ref="carusel"
    @touchstart="getTouchInfo(true, swipeStart, $event)"
    @touchmove.prevent="getTouchInfo(true, touchMoveEvent, $event)"
    @touchend="getTouchInfo(true, swipeEnd, $event)"
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
  duration: {type:Number, required:false, default: 300},
})

const carusel = ref(null);
const targetSlide = { value: 0 };



const slidePosition = new Proxy(targetSlide, {
  set(target, prop, val) {
    if (isNaN(val)) {
      return target[prop];
    }
    if (val > 20) {
      target[prop] = 20;
      return true
    } else if (-val > carusel.value.scrollWidth - 280) {
      target[prop] = -carusel.value.scrollWidth + 280;
      return true
    } else {
      target[prop] = val;
      return true
    }
  },
  get(target, prop) {
    return target[prop];
  },
});

let slideStart,
  slideEnd = 0;
let swipeWidth;
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
const getSwipeWidth = ()=>{
  if(!swipeWidth){
    swipeWidth = carusel.value.clientWidth / carusel.value.childElementCount || 1;
  }
  return swipeWidth;
}
const prev = () =>{
  slidePosition.value += getSwipeWidth();
  setStyleCarusel(slidePosition.value, props.duration);
}
const next = () =>{
  slidePosition.value -= getSwipeWidth();
  setStyleCarusel(slidePosition.value, props.duration);
}

defineExpose({
  prev,
  next
})

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
  
<style lang="scss" scoped>
.mobile-carusel {
    display: flex;
    flex-wrap: nowrap;
    column-gap: 16px;
    // transition-timing-function: ease-out;
    transition-timing-function: cubic-bezier(.21,.56,.56,1);
    width: min-content;
  }
</style>