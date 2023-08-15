<template>
 <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="onAfterEnter"
      @leave="leave"
      :css="false"
    >
      <div
        ref="choice"
        v-show="show"
        class="drop-down__choice"
        @click="$emit('update:check',true)"
      >
        <slot> </slot>
      </div>
    </Transition>  
</template>

<script setup>
let time;
let height;
const props = defineProps({
    show:{type: Boolean, required:true}
})
const beforeEnter = (el) => {
  el.style = `max-height: ${0}px;
  overflow:hidden;
  padding:0;
  opacity:0;
  display:none`;
};
const enter = (el, done) => {
  height = el.scrollHeight < 300 ? el.scrollHeight + 30 : 300;
  time = height / 400;
  el.style = `transition: max-height ${time}s,
  padding ${time}s,
  opacity ${time}s;
  opacity:1;
  max-height: ${height}px;
  overflow:hidden;`;
  setTimeout(done, time * 1000);
};

const onAfterEnter = (el) => {

  el.style = `max-height: ${height}px;
  overflow:auto;`;
};

const leave = (el, done) => {
 
  el.style = `transition: max-height ${time}s,
  padding ${time}s,
  opacity ${time + 0.1}s;
  max-height: ${0}px;
  overflow:hidden;
  padding:0;
  opacity:0`;
  setTimeout(done, time * 1000);
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
.drop-down__choice {
    position: absolute;
    top: 100%;
    margin-top: 5px;
    padding: 10px 15px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid $accent-50;
    background: $background;
    color: $accent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    // scrollbar-gutter: stable;
  }
</style>