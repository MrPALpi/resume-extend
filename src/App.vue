<script>
import {  RouterView, RouterLink } from 'vue-router';
import PreLoader from './components/preloader/PreLoader.vue';
export default {
  components:{
    PreLoader,
  }
}
</script>

<template>
<div>
<router-link to="/pattern">pattern</router-link>
  <br>
<router-link to="/">home</router-link>
</div>


<RouterView v-slot="{ Component, route }">
  <template v-if="Component">
    <Transition mode="out-in" name="page">
      <KeepAlive>
        <Suspense>
          <template #default>
            <Transition mode="out-in" name="page-slide">
              <div :key="route.name" class="root">
                <component :is="Component"  />
              </div>
            </Transition>
            </template>
          <template #fallback>
            <PreLoader></PreLoader>
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>

</template>

<style  lang="scss" scoped>
@import './assets/styles/main.scss';
.page-enter-active,
.page-leave-active{
  transition: opacity 0.5s ease-in-out;
}
.page-enter-from,
.page-leave-to{
  opacity: 0;
}




.page-slide-enter-active,
.page-slide-leave-active{
  transition: transform 0.3s ease-in, opacity 0.4s ease;
}

.page-slide-enter-from,
.page-slide-leave-to{
 
  position: absolute;
  transform: scale(1.1); 
  // transform: translateX(200%);
  opacity: 0;
}

.root{
  padding: 0 140px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

@media (max-width: 1100px) {
  .root {
    padding: 0 24px;
  }
}
</style>
