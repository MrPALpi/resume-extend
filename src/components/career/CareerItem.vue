<template>
  <div class="career__item career-item">
    <div class="career-item__title">
      {{ careerItem.name }}
    </div>
    <div class="career-item__description">
      {{ careerItem.description }}
    </div>
    <div class="career-item__dates">
      <span class="career-item__date">
       <!-- {{ getDate() }} -->
        <!-- {{ careerItem.dateBegin }} -->
      </span>
      <span class="career-item__date">
        {{ careerItem.dateBegin }} · {{ careerItem.dateEnd }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  careerItem: { type: Object, required: true },
});

const getDate = () =>{
    // const dateBegin = 
    // const dateEnd = 
    const diff = props.careerItem.dateBegin.getTime() - props.careerItem.dateEnd.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const year = Math.floor(days / 365);
    const month = Math.floor((days % 365) / 30);
    const day = (days % 365) % 30;
    return `${year} ${month} ${day}`
}

</script>




<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
@import "../../assets/styles/mixin/list-item.scss";
.career-item {
    @include list-item;
    width: 100%;
    min-width: 300px;
    
    &__description{
        max-height: 80px;
        @media($media-phone) {
            max-height: 40px;
        }
    }
    // @media($media-phone){
    //     max-width: 300px;
    // }
    &__dates{
        display: flex;
        justify-content: space-between;
        color: $accent;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
    }

}
</style>