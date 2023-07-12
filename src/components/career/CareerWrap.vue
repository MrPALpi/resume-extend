<template>
  <div v-if="windowSize>900" class="career__wrap">
        <career-list :listItems="career"/>
        <career-list :listItems="achievements"/>
  </div>
  <div v-else >
        <mobile-carusel>
            <career-item v-for="careerItem in career" :key="careerItem" :careerItem="careerItem"/>
        </mobile-carusel>
        <mobile-carusel>
            <career-item v-for="achievement in achievements" :key="achievement" :careerItem="achievement"/>
        </mobile-carusel>
  </div>
</template>

<script setup>
import CareerList from './CareerList.vue';
import MobileCarusel from '../carusel/MobileCarusel.vue';
import CareerItem from './CareerItem.vue';
import useWindowSize from '../../hooks/useWindowSize.js';
const props = defineProps({
  career: { type: Array, required: true },
  achievements: { type: Array, required: true },
});
const { windowSize } = useWindowSize();
</script>

<style lang="scss" setup>
.career__wrap {
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 40px;
}
</style>