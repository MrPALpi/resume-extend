<template>
    <div class="career-list career__list">
        <career-item v-for="item in listItems" :key="item" :careerItem="item"/>
    </div>
</template>

<script setup>
import CareerItem from './CareerItem.vue';
const props = defineProps({
    listItems: { type: Array, required: true },
});
</script>

<style lang="scss" scoped>
.career-list{
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 580px;
    min-width: 300px;
    width: 100%;
}
</style>