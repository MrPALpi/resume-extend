<template>
    <div class="account">
      
        <div class="account__aside ">
            <div class="account__aside-block">

            </div>
        </div>

        <div class="account__component">

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.account{
    display: flex;
    min-height: 100vh;
    // position: relative;
    &__aside{
        width: 25%;
        height: 1000px;
        &-block{
            top: 0;
            background: blue;
            height: 200px;
            position: sticky;
            width: 100%;

        }
    }
    &__component{
        background: green;
        width: 70%;
        height: 1000px;
    }
}

</style>