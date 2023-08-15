<template>
  <div class="drop-down">
    <div v-if="props.inputValue !== undefined" class="drop-down__menu" >
      <input
        @focusin="showChoice"
        @focusout="!check ? showChoice() : check=false"
        type="text"
        v-model="inputValue"
        placeholder="Выберите"
        class="drop-down__input"
      />

      <arrow-to 
        class="drop-down-menu__arrow"
        :class="{ 'drop-down-menu-arrow_down': show }"
      />
    </div>

    <div v-else class="drop-down__menu">
      <span  @click="showChoice">Выберите</span>
      <arrow-to @click="showChoice"
        class="drop-down-menu__arrow"
        :class="{ 'drop-down-menu-arrow_down': show }"
      />
    </div>
    <drop-down-choice :show="show" v-model:check="check">
      <slot></slot>
    </drop-down-choice>
  </div>
</template>

<script setup>

import { ref, defineEmits, computed } from "vue";
import ArrowTo from "../icons/ArrowTo.vue";
import DropDownChoice from './DropDownChoice.vue'
const show = ref(false);
const check = ref(false);
const showChoice = (event) => {
  console.log(event);
  show.value = !show.value; 
  if (props.inputValue !== undefined) {return}
  if (inputValue.value.length){setTimeout(()=>{inputValue.value = '';}, 200)}
};

const props = defineProps({
  inputValue: { type: String,
    required: false,
  },
});

const emit = defineEmits(["update:inputValue"]);

const inputValue = computed({
    get () { return props.inputValue },
    set (value) {
      if(value.length){show.value = true;}
      // else{show.value = false;}
      emit('update:inputValue', value);
    },
});

</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.drop-down {
  color: $text;
  position: relative;

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: 2px solid $accent-50;
    border-radius: 30px;
    background: transparent;
    min-width: 200px;
  }
  &-menu {
    &__arrow {
      width: 40px;
      transition: transform 0.3s;
    }
    &-arrow_down {
      transform: rotate(90deg);
    }
  }
  &__input {
    padding: 5px 10px;
    background: transparent;
    color: $text;
    border: none;
    outline: none;
  }
}
</style>