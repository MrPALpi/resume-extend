<template>
    <section class="welcome-wrap">
    <div class="welcome">
      <div class="welcome__about welcome-about">
        <about-block class="welcome-about__block">
          <template #header>
            <hello-text> {{ user.greeting }} </hello-text>
          </template>
          <template #title>
            {{ props.user.name }} <br />
            {{ props.user.secondName }}
          </template>
          <template #description>
            {{ props.user.profession }}
          </template>
          <template #footer> </template>
        </about-block>
      </div>
      <img-blur :img="props.user.avatarPrew" class="welcome__avatar welcome-avatar"/>
      <div class="welcome__links welcome-links">
        <a href="" class="welcome-links__link">Моё резюме <arrow-download /></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutBlock from "../about/AboutBlock.vue";
import HelloText from "../ui/HelloText.vue";
import ArrowDownload from "../icons/ArrowDownload.vue";
import ImgBlur from "../img/ImgBlur.vue";
  const props = defineProps({
        user: {type: Object, required: true}
    })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.welcome-wrap {
  min-height: 100vh;
  padding: 150px 0 0;
  @media ($media-phone){
    align-items: flex-start;
    padding: 40px 0px;    
  }
}

.welcome {
  width: 100%;
  display: flex;
  justify-content: space-between;
  row-gap: 40px;
  flex-wrap: wrap;

  &__about {
    display: flex;
    align-items: center;
    width: 33%;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
  }
  &-links__link{
    padding: 14px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $accent-50;
  }

  &__avatar {
    max-width: 500px;
    min-width: 200px;
    width: 33%;
    
  }

  @media ($media-phone){
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    &__avatar{
      width: 100%;
      order: 1;
    }
    &__links{
      width: 100%;
      flex-direction: row;
      order: 3;
    }
    &__about{
      width: 100%;
      order: 2;
    }
  }

}

</style>