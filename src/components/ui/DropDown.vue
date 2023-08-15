<template>
  <div class="drop-down" >
    <div @click="showChoice" class="drop-down__menu drop-down-menu">
      <span  class="drop-down-menu__placeholder">Выберите</span>
      <animate-arrow  class="drop-down-menu__arrow" :active="show" />
    </div>
    <drop-down-choice :show="show" >
      <template #input>
          <input 
       type="text"
      @input="$emit('update:inputValue', $event.target.value)"
      :value="props.inputValue"
      placeholder="Поиск..."
      class="drop-down__input">
      </template>
      <slot></slot>
    </drop-down-choice>
  </div>
</template>

<script setup>

import { ref } from "vue";
import AnimateArrow from "./AnimateArrow.vue";
import DropDownChoice from './DropDownChoice.vue'
const show = ref(false);
const showChoice = (event) => {
  show.value = !show.value; 

};

const props = defineProps({
  inputValue: { type: String,
    required: false,
  },
});


</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.drop-down {
  color: $text;
  position: relative;
  // width: min-content;

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    border: 1px solid $accent-50;
    border-radius: 30px;
    background: transparent;
    min-width: 200px;
    cursor: pointer;
  }
  &-menu {
    &__arrow {
      width: 30px;
     
    }
    &__placeholder{
      color: $text;
    }
  }
  &__input {
    padding: 5px 10px;
    background: transparent;
    color: $text;
    border: 1px solid $accent-20;
    border-radius: 10px;
    outline: none;
    width: 100%;
    transition: border-color 0.3s;
    &:focus {
      border-color: $accent-50;
    }
  }
}
</style>