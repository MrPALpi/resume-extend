<template>
    <span class="hello-text">
        <slot>

        </slot>
    </span>
</template>



<style lang="scss" scoped>
@import '../../assets/styles/main.scss';
.hello-text{
    background-color: $accent-10;
    padding: 5px 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 16px;
    color: $accent;
}
</style>