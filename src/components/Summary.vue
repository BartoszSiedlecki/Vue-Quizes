<script setup>
    import {defineProps} from "vue"
    import {RouterLink} from "vue-router"
    
    const {score} = defineProps({
        score: Number,
    })
</script>

<template>
    <div>
        <h3>Your Results...</h3>
        <h1>{{ score }}/3</h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    div{
        width: 100%;
        height: 32rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 2rem;
        font-weight: 500;
    }

    h1{
        font-size: 5rem;
        font-weight: 500;
    }
</style>