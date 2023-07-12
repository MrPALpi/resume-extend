<template>
  <div  class="portfolio__item portfolio-item">
    <div class="portfolio-item__title">
      {{ portfolioItem.name }}
    </div>
    <div class="portfolio-item__description">
      {{ portfolioItem.description }}
    </div>
    <div class="portfolio-item__tag-list portfolio-item-tag-list">
      <hello-text
        class="portfolio-item__tag-item"
        v-for="tag in portfolioItem.tags"
        :key="tag"
      >
        {{ tag }}
      </hello-text>
    </div>
    <div class="portfolio-item__photo portfolio-item-photo">
      <img
        @mouseover="addHover"
        @mouseleave="removeHover"
        @touchstart="toggleHover"
        class="portfolio-item-photo__img portfolio-item__img"
        :style="transitionTime"
        :src="portfolioItem.img"
        :alt="portfolioItem.name"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script async setup>
import HelloText from "../ui/HelloText.vue";
import { computed, ref } from 'vue';
const props = defineProps({ 
    portfolioItem: {
      name: "",
      description: "",
      tags: [],
      img: "",
    },
  });
  
    const target = ref(0);
    const setHeight = (height)=> {if (!target.value) target.value = height};
    const getTouchInfo = ()=> {return 'ontouchstart' in window};

    const addHover = (event)=>{
      if (!getTouchInfo()){
      setHeight(event.target.height); 
      event.target.classList.add("portfolio-item__img_hover");
      }
      
    }
    const removeHover = (event)=>{
      if (!getTouchInfo()){
      event.target.classList.remove("portfolio-item__img_hover");
      }
      
    }
    const toggleHover = (event)=>{
      setHeight(event.target.height);
      if (getTouchInfo()){
        event.target.classList.toggle("portfolio-item__img_hover");
      } 
      
    }

    
    const transitionTime = computed(()=>{
        return `transition: transform ${target.value / 300}s`;
    });

</script>

<style lang="scss">
@import "../../assets/styles/main.scss";
@import "../../assets/styles/mixin/list-item.scss";
.portfolio-item {
  max-width: 360px;
  min-width: 300px;
  @include list-item;
  @media ($media-phone) {
    padding: 24px;
    // &__title{
    //   font-size: 16px;
    // }
  }

  // &__title {
  //   font-style: normal;
  //   font-weight: 700;
  //   line-height: 23px;
  //   color: $text;

  // }
  // &__description {
  //   font-style: normal;
  //   height: 100px;
  //   margin-top: 8px;
  //   font-weight: 400;
  //   font-size: 14px;
  //   line-height: 16px;
  //   color: $alt-text;
  // }
  &__photo {
    margin-top: 20px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }
  &__img {
    width: 100%;
    border-radius: 8px;
    &_hover {
      transform: translateY(calc(-100% + 200px));
    }
  }
  &__tag-list{
    margin-top:16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }
}
</style>