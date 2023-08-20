<template>
  <div class="about">
    <span class="about__header">
      <slot name="header"> </slot>
    </span>
    <span class="about__title">
      <slot name="title"> </slot>
    </span>
    <div class="about__description" >
      <slot name="description"> </slot>
    </div>
    <span class="about__footer">
      <slot name="footer"> </slot>
    </span>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin/title-mixin.scss";
.about {
  width: 100%;
  display: grid;
  gap: 24px;
}
.about__title {
  font-style: normal;
  font-weight: 800;
  font-size: var(--title-size);
  line-height: 58px;
  color: var(--text);

}

.about__description {
  color: var(--alt-text);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}
</style>