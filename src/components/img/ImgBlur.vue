<template>
  <div class="img-blur">
    <img
      class="img-blur__shadow"
      :src="props.img"
      alt=""
    />
    <div class="img-blur__wrap">
    <img
      class="img-blur__img"
      :src="props.img"
      alt=""
    />
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  alt: { type: String, required: false, default: "" },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin/circle-image.scss';
.img-blur{
    position: relative;
    &__img {
      width: 100%;
      position: relative;
      @include circle-img;
      transition: transform 0.4s ease;
    }
    &__shadow {
      position: absolute;
      width: 100%;
      
      -webkit-filter: blur(25px);
      filter: blur(25px);
      @include circle-img;
      transition: transform 0.4s ease;
    }
    &__wrap{
      border-radius: 100%;
      overflow: hidden;
    }
    @media(hover:hover){
        &:hover{
          .img-blur__img, .img-blur__shadow{
            transform: scale(1.05);
          }
      }
    }
    
}

</style>