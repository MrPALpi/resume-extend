<template>
  <div @blur="hideChoice" ref="select" class="drop-down" tabindex="-1">
    <div @click="toggleChoice" class="drop-down__menu drop-down-menu">
      <span class="drop-down-menu__placeholder">Выберите</span>
      <animate-arrow class="drop-down-menu__arrow" :active="show" />
    </div>
    <drop-down-choice :show="show">
      <template #input>
        <input
          ref="input"
          @blur="hideChoiceInput"
          @input="$emit('update:inputValue', $event.target.value)"
          :value="props.inputValue"
          type="text"
          placeholder="Поиск..."
          class="drop-down__input"
        />
      </template>
      <slot :input="props.inputValue"></slot>
    </drop-down-choice>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AnimateArrow from "./AnimateArrow.vue";
import DropDownChoice from "./DropDownChoice.vue";
const props = defineProps({
  inputValue: { type: String, required: false },
});

const show = ref(false);
const select = ref(null);
const input = ref(null);

const hideChoice = (event) => {
  const childInputEl = input.value ?? {};
  if (Object.is(event.relatedTarget, childInputEl)) {
    return;
  }
  show.value = false;
};

const toggleChoice = () => {
  select.value.focus();
  show.value = !show.value;
};

const hideChoiceInput = (event) => {
  if (Object.is(event.relatedTarget, select.value)) {
    return;
  }
  show.value = false;
};


</script>

<style lang="scss" scoped>
.drop-down {
  color: var(--text);
  position: relative;
  // width: min-content;

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    border: 1px solid var(--accent-50);
    border-radius: 30px;
    background: transparent;
    min-width: 200px;
    cursor: pointer;
  }
  &-menu {
    &__arrow {
      width: 30px;
    }
    &__placeholder {
      color: var(--text);
    }
  }
  &__input {
    padding: 5px 10px;
    background: transparent;
    color: var(--text);
    border: 1px solid var(--accent-20);
    border-radius: 10px;
    outline: none;
    width: 100%;
    transition: border-color 0.3s;
    &:focus {
      border-color: var(--accent-50);
    }
  }
}
</style>
