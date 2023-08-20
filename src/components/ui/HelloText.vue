<template >
    <span class="hello-text">
        <span class="hello-text__text">
            <slot/>
        </span>
    </span>
</template>



<style lang="scss" scoped>
.hello-text{
    background-color: var(--accent-10);
    padding: 5px 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 16px;
    display: block;
    width: max-content;
    color: var(--accent);
    transition: 0.3s;
    position: relative;
    &__text{
        z-index: 2;
        position: relative;
    }
    transition: box-shadow 0.3s;
    @media(hover:hover){
        &:hover{
            box-shadow: 0 0 0 4px var(--accent-10);   
        }
    }
    @media(hover:none){
        &:active{
            box-shadow: 0 0 0 4px var(--accent-10);   
        }
    }
    
 
}
</style>