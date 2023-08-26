<template>
  <div v-if="windowSize>900" class="career__wrap">
      <div class="career-wrap__item">
        <div class="career-wrap__title">
          aaaaaaaaaaaa
        </div>
        <career-list :listItems="career"/>
      </div>
      <div class="career-wrap__item">
        <div class="career-wrap__title">
          aaaaaaaaaaaa
        </div>
        <career-list :listItems="achievements"/>
      </div>
  </div>
  <div v-else class="career__wrap">
      <div class="career-wrap__item">
        <div class="career-wrap__title">
          aaaaaaaaaaaa
        </div>
        <mobile-carusel>
            <career-item v-for="careerItem in career" :key="careerItem" :careerItem="careerItem"/>
        </mobile-carusel>
      </div>
      <div class="career-wrap__item">
        <div class="career-wrap__title">
          aaaaaaaaaaaa
        </div>
        <mobile-carusel>
            <career-item v-for="achievement in achievements" :key="achievement" :careerItem="achievement"/>
        </mobile-carusel>
      </div>
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

<style lang="scss" scoped>

.career{
    &__wrap {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 40px;
    margin-top: 64px;
  }
  &-wrap{
    &__item{
      max-width: 580px;
      min-width: 300px;
      width: 100%;
    }
    &__title{
      color: #FFF;
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 60px;
    }
  }
  @media ($media-phone) {
    .career__wrap{
      justify-content: space-between;
      flex-direction: column;
      margin-top: 24px;
    }
     .career-wrap{
      &__title{
        font-size: 24px;
        margin-bottom: 30px;
        text-align: left;
      }
      &__item{
        max-width: unset;
      } 
    }
  }
}
</style>