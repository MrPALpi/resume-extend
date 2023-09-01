<template>
  <portfolio-carusel
    v-if="windowSize > 900"
    :portfolioList="portfolioList"
    :windowSize="windowSize"
    class="portfolio-carusel"
  />
  <div v-else>
  <mobile-carusel-btns :objFunction="mobileCarusel"/>
  <mobile-carusel  ref="mobileCarusel" :round="true">
    <portfolio-item
      v-for="item in portfolioList"
      :key="item"
      :portfolioItem="item"
      
  /></mobile-carusel>
  </div>
  
  
  

</template>

<script setup>
import PortfolioItem from "./PortfolioItem.vue";
import PortfolioCarusel from "./PortfolioCarusel.vue";
import MobileCarusel from "../carusel/MobileCarusel.vue";
import MobileCaruselBtns from "../carusel/MobileCaruselBtns.vue";
import useWindowSize from '../../hooks/useWindowSize.js';
import { ref, onMounted } from 'vue';

const mobileCarusel = ref(null);


const props = defineProps({
  portfolioList: { type: Array, required: true },
});
const { windowSize } = useWindowSize();

</script>