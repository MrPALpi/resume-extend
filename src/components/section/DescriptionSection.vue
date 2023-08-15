<template>
  <section class="description">
    <div class="description__block desc-me">
    <div class="desc-me__photo">
        <img-blur :img="props.user.avatarDescription"/>
    </div>
    <about-block class="desc-me__about">
      <template #header>
        <hello-text class="desc-me__hello"> 🧐 Обо мне </hello-text>
      </template>
      <template #title> {{ props.user.secondName}} {{ props.user.name }} {{ props.user.middleName }}</template>
      <template #description>
        <span v-for="description in props.user.description" :key="description">
          {{ description }}
          <br>
          <br>
        </span>
      </template>
      
    </about-block>
  </div>
  </section>
</template>

<script setup>
import AboutBlock from "../about/AboutBlock.vue";
import HelloText from '../ui/HelloText.vue';
import ImgBlur from "../img/ImgBlur.vue";
const props = defineProps({
        user: {type: Object, required: true}
    });

</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/mixin/element-show.scss';
.description{
  @include element-show;
  padding-top: 140px;
}
.desc-me{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80vh;
    gap: 35px;
    @media ($media-phone) {
        flex-wrap: wrap;
        justify-content: center;   
       }
    &__photo{
        max-width: 450px;
        min-width: 200px;
        width: 30%;
        @media ($media-phone) {
         width: 100%;   
        }
    }

    &__about{
        width: 55%;
        @media ($media-phone) {
            width: 100%;   
           }
    }
}
</style>