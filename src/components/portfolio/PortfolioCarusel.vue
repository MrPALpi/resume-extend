<template>
  <div class="portfolio-carusel__wrap">
    <arrow-to
      @click="prevSlide"
      :class="{ 'portfolio-carusel__btn_disabled': numberChunk === 0 }"
      class="portfolio-carusel__btn portfolio-carusel__btn__left"
    />

    <div class="portfolio-carusel__carusel" :style="transform">
      <portfolio-list
        v-for="chunk in ArrayToChunk(portfolioList, chunkSize)"
        :key="chunk"
        :portfolioList="chunk"
      ></portfolio-list>
    </div>

    <arrow-to
      @click="nextSlide"
      :class="{ 'portfolio-carusel__btn_disabled': numberChunk === length }"
      class="portfolio-carusel__btn portfolio-carusel__btn__right"
    />
  </div>
</template>

<script setup>
import PortfolioList from "./PortfolioList.vue";
import ArrowTo from "../../components/icons/ArrowTo.vue";
import { computed, ref } from "vue";
const props = defineProps({
  portfolioList: { type: Array, required: true },
  windowSize: { type: Number, required: false, default: 1920 },
  winToChunkSize: {
    type: Object,
    required: false,
    default: {
      big: { winSize: 1840, chunkSize: 8 },
      middle: { winSize: 1440, chunkSize: 6 },
      small: 4,
    },
  },
});

const numberChunk = ref(0);
const length = ref(0);

const ArrayToChunk = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  length.value = result.length - 1;
  return result;
};

const chunkSize = computed(() => {
  if (props.windowSize > props.winToChunkSize.big.winSize)
    return props.winToChunkSize.big.chunkSize;
  if (props.windowSize >= props.winToChunkSize.middle.winSize)
    return props.winToChunkSize.middle.chunkSize;
  else return props.winToChunkSize.small;
});

const nextSlide = () => {
  if (numberChunk.value < length.value) {
    numberChunk.value++;
  }
};
const prevSlide = () => {
  if (numberChunk.value > 0) {
    numberChunk.value--;
  }
};

const transform = computed(() => {
  console.log(length.value,numberChunk.value)
  if (length.value < numberChunk.value) {
    numberChunk.value = length.value;
  }
  return `transform: translateX(-${numberChunk.value * 200}%)`;
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables.scss";
.portfolio-carusel {
  &__carusel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    gap: 100%;
    transition: transform 0.7s ease-in-out;
  }
  &__wrap {
    position: relative;
    margin-bottom: 20px;
  }
  &__btn {
    cursor: pointer;
    z-index: 2;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    top: calc(50% - 25px);
    background: $accent-50;
    transition: opacity 0.3s ease 0.5s;

    &__left {
      left: 0;
      transform: rotate(180deg);
    }
    &__right {
      right: 0;
    }
    &_disabled {
      opacity: 0.4;
    }
  }
}
</style>