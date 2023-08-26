<template>
  <div ref="carusel" v-on="setEvents()" class="mobile-carusel">
    <slot> </slot>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
const props = defineProps({
  slip: { type: Number, required: false, default: 800 },
  duration: { type: Number, required: false, default: 300 },
});

const carusel = ref(null);

const slidePosition = new Proxy(
  { value: 0 },
  {
    set(target, prop, val) {
      if (isNaN(val)) {
        return target[prop];
      }
      if (-val < 0) {
        target[prop] = 0;
        console.log("is 0", target[prop], val);
        return true;
      } else if (-val > carusel.value.scrollWidth) {
        target[prop] = -carusel.value.scrollWidth;
        console.log("is else if", target[prop], val);
        return true;
      } else {
        target[prop] = val;
        console.log("is else", target[prop], val);
        return true;
      }
    },
    get(target, prop) {
      return target[prop];
    },
  }
);

let slideStart,
  slideEnd = 0;
let swipeWidth, time;
let pointerDown = false;

const setEvents = () => {
  if (!("ontouchstart" in window)) {
    return {
      mousedown: swipeStart,
      mousemove: touchMoveEvent,
      mouseup: swipeEnd,
      mouseleave: mouseLeaveEvent,
    };
  }
};
const setScrollCarusel = (scroll) => {
  carusel.value.scrollTo({
    left: scroll,
  });
};
const getSwipeWidth = () => {
  if (!swipeWidth) {
    swipeWidth =
      Math.ceil(carusel.value.scrollWidth / carusel.value.childElementCount);
  }
  return swipeWidth;
};
const prev = () => {
  slidePosition.value = -(carusel.value.scrollLeft - getSwipeWidth());
  setScrollCarusel(-slidePosition.value);
};
const next = () => {
  console.log(carusel.value.scrollLeft + getSwipeWidth());
  slidePosition.value = - (carusel.value.scrollLeft + getSwipeWidth());
  setScrollCarusel(-slidePosition.value);

};

defineExpose({
  prev,
  next,
});

const swipeStart = (event) => {
  event.preventDefault();
  slideStart = slideEnd = event.clientX;
  time = event.timeStamp;
  pointerDown = true;
};
const touchMoveEvent = (event) => {
  if (!pointerDown) return;
  slideEnd = slideStart - event.clientX;
  slideStart = event.clientX;
  slidePosition.value = slidePosition.value - slideEnd;
  setScrollCarusel(-slidePosition.value);
};
const swipeEnd = (event) => {
  pointerDown = false;
  time = event.timeStamp - time;
  if (slideStart === slideEnd) return;
  setScrollCarusel(-slidePosition.value);
};

const mouseLeaveEvent = () => (pointerDown = false);
</script>
  
<style lang="scss" scoped>
.mobile-carusel {
  display: flex;
  flex-wrap: nowrap;
  column-gap: 16px;
  padding: 30px 0 20px;
  width: 100%;
  cursor: grab;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>