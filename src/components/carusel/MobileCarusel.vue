<template>
  <div ref="carusel" v-on="setEvents()" class="mobile-carusel">
    <slot> </slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  round: { type: Boolean, required: false, default: false },
});

const carusel = ref(null);

const slidePosition = new Proxy(
  { value: 0 },
  {
    set(target, prop, val) {
      if (isNaN(val)) {
        return target[prop];
      } else {
        const value = Math.max(-getCaruselWidthFixed(), Math.min(val, 0));
        target[prop] = value;
        return true;
      }
    },
    get(target, prop) {
      return target[prop];
    },
  }
);

let slideStart;
let slideEnd = 0;
let slideWidth, time, caruselWidth;
let pointerDown = false;

const setEvents = () => {
  if (!("ontouchstart" in window)) {
    return {
      mousedown: swipeStart,
      mousemove: touchMoveEvent,
      mouseup: swipeEnd,
      mouseleave: swipeEnd,
    };
  }
};

const setScrollCarusel = (scroll, behavior = "smooth") => {
  carusel.value.scrollTo({
    left: scroll,
    behavior,
  });
};
const getslideWidth = () => {
  if (!slideWidth) {
    slideWidth = Math.ceil(
      carusel.value.scrollWidth / carusel.value.childElementCount
    );
  }
  return slideWidth;
};

const getCaruselWidthFixed = () => {
  if (!caruselWidth) {
    caruselWidth = carusel.value.scrollWidth - getslideWidth();
  }
  return caruselWidth;
};
const prev = () => {
  btnScroll(-1);
};
const next = () => {
  btnScroll(1);
};
const btnScroll = (sign) => {
  const slideWidth = getslideWidth();
  const val = -(carusel.value.scrollLeft + sign * slideWidth);
  slidePosition.value = Math.round(val / slideWidth) * slideWidth;
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
  setScrollCarusel(-slidePosition.value, "auto");
};
const swipeEnd = (event) => {
  pointerDown = false;
  if (slideStart === slideEnd) return;
  time = event.timeStamp - time;
  const value =
    slidePosition.value +
    (slideEnd / Math.abs(slideEnd)) * (slidePosition.value / time) * 25;
  if (props.round) {
    const slideWidth = getslideWidth();
    slidePosition.value = Math.round(value / slideWidth) * slideWidth;
  } else {
    slidePosition.value = value;
  }

  setScrollCarusel(-slidePosition.value);
};
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
  // scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
