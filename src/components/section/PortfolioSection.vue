<template>
<section class="portfolio">
    <hello-text> 🔗 Портфолио </hello-text>
    <div class="portfolio__title">Моё портфолио</div>
    <div class="portfolio__wrap-list">
      <portfolio-wrap :portfolioList="props.portfolio"/>
    </div>
  </section>  
</template>

<script setup>
    import PortfolioWrap from '../portfolio/PortfolioWrap.vue';
    import HelloText from "../ui/HelloText.vue";
    const props = defineProps({
        portfolio : {type: Object, required:true,}
    })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/mixin/element-show.scss';
.portfolio{
    padding-top: 140px;
    @include element-show;
    @media ($media-laptop) {
        padding-top: 70px;
    }
    
    &__title{
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;
        margin-top: 28px;
        color: #FFFFFF;
    }
    &__wrap-list{
        margin: 100px auto 0;
        @media ($media-laptop) {
            margin: 30px auto 0;
        }
    }
}
</style>