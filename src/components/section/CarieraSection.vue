<template>
    <section class="career">
        <hello-text>💼 Карьера</hello-text>
        <span class="career__title">
            Моя динамика
        </span>
        <career-wrap :career="career" :achievements="achievements" />
    </section>
</template>

<script setup>
import HelloText from "../ui/HelloText.vue";
import CareerWrap from "../career/CareerWrap.vue";
const props = defineProps({
  career: { type: Array, required: true },
  achievements: { type: Array, required: true },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
@import "../../assets/styles/mixin/title-mixin.scss";
@import '@/assets/styles/mixin/element-show.scss';
.career{
    margin-top: 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include element-show;
    @media ($media-phone){
        margin-top: 80px;
        align-items: flex-start;
    }
    &__title{
        @include title-mixin;
    }
}
</style>