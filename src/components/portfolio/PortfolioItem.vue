<template>
  <div  class="portfolio__item portfolio-item">
    <div class="portfolio-item__title">
      {{ portfolioItem.name }}
    </div>
    <div class="portfolio-item__description">
      {{ portfolioItem.description }}
    </div>
    <div class="portfolio-item__tag-list">
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
        :class="{'portfolio-item-photo__img_hover':scrollImg}"
        class="portfolio-item-photo__img"
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
    const scrollImg = ref(false);

    const target = ref(0);

    const setHeight = (height)=> {if (!target.value) target.value = height};

    const getTouchInfo = ()=> {return 'ontouchstart' in window};

    const addHover = (event)=>{
      if (!getTouchInfo()){
      setHeight(event.target.height); 
      scrollImg.value=true;
      }
      
    }
    const removeHover = (event)=>{
      if (!getTouchInfo()){
      scrollImg.value=false;
      }
      
    }
    const toggleHover = (event)=>{
      setHeight(event.target.height);
      if (getTouchInfo()){
        scrollImg.value=!scrollImg.value;
      } 
      
    }

    
    const transitionTime = computed(()=>{
        return `transition: transform ${target.value / 300}s 0.1s`;
    });

</script>

<style lang="scss">
@import "../../assets/styles/mixin/list-item.scss";

.portfolio-item {
  max-width: 360px;
  min-width: 300px;
  @include list-item;

  @media ($media-phone) {
    padding: 24px;
  }


  &__photo {
    margin-top: 20px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }
  &-photo{
    &__img {
    width: 100%;
    border-radius: 8px;
      &_hover {
        transform: translateY(calc(-100% + 200px));
      }
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