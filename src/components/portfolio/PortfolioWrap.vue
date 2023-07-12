<template>
  <portfolio-carusel
    v-if="windowSize > 900"
    :portfolioList="portfolioList"
    :windowSize="windowSize"
    class="portfolio-carusel"
  />

  <mobile-carusel v-else>
    <portfolio-item
      v-for="item in portfolioList"
      :key="item"
      :portfolioItem="item"
  /></mobile-carusel>

</template>

<script setup>
import PortfolioItem from "./PortfolioItem.vue";
import PortfolioCarusel from "./PortfolioCarusel.vue";
import MobileCarusel from "../carusel/MobileCarusel.vue";
import useWindowSize from '../../hooks/useWindowSize.js';
const props = defineProps({
  portfolioList: { type: Array, required: true },
});
const { windowSize } = useWindowSize();

</script>