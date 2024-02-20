<script setup>
    import { defineProps } from 'vue';

    const {questionNumber, barCompletion} = defineProps({
        questionNumber: Number,
        barCompletion: Number
    })

</script>

<template>
    <h2 class="header">Question {{ questionNumber }}/3</h2>
    <div class="bar"><div class="progress" :style="'width:'+barCompletion+'%;'"></div></div>
</template>

<style scoped>
    .header{
        font-size: 2rem;
        font-weight: 500;
    }

    .bar{
        margin-top: 1rem;
        height: 2.5rem;
        width: 18.4rem;
        border: solid 3px rgba(255, 166, 0, .3);
    }

    .progress{
        height: 100%;
        width: 66%;
        background-color: rgba(255, 166, 0, .3);
    }
</style>