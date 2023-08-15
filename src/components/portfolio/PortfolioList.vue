<template>
    <div class="portfolio__list portfolio-list">
 
        <portfolio-item v-for="item in portfolioList" :key="item" :portfolioItem="item"/>
     
    </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';
export default {
    components:{
        PortfolioItem
    },
    props:{
        portfolioList:{type:Array, required:true},
    }
}
</script>

<style lang="scss" scoped>

.portfolio__list{
    display: flex;
    flex-wrap:wrap;
    column-gap: 40px;
    row-gap: 40px;
    justify-content: center;
    align-items: flex-start;
}

</style>