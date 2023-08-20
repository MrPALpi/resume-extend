<template>
<div class="mobile-carusel-btns">
    <arrow-to @click="prev" class="mobile-carusel-btns__btn mobile-carusel-btns__btn_left" />
    <arrow-to @click="next" class="mobile-carusel-btns__btn" />
</div>  
</template>

<script setup>
import ArrowTo from '../icons/ArrowTo.vue';
const props = defineProps({
    objFunction : {type:Object, required:true}
})
const prev = () =>{
  if (props.objFunction!==null){
    props.objFunction.prev();
  }
}
const next = () =>{
  if (props.objFunction!==null){
    props.objFunction.next();
  }
}
</script>

<style lang="scss" scoped>
.mobile-carusel-btns{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
    padding: 0 0 10px;
    &__btn{
        width: 40px;
        background: var(--accent-10);
        border-radius: 5px;
        cursor: pointer;
        transition: scale 0.2s;
        &_left{
            transform: rotate(180deg);
        }
        @media (hover:hover) {
          &:hover{
            scale: 1.05;
          }
      }
        &:active{
          scale: 0.95;
        }
    }
}
</style>