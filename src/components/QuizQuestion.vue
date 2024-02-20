<script setup>
    import { defineProps, defineEmits } from 'vue';

    const {question} = defineProps(["question"])
    const emits = defineEmits(["update:index"])

    function selectAnswer(isCorrect){
        emits("update:index", isCorrect)
    }

    

</script>

<template>
    <h1>{{ question.text }}</h1>
    <ol>
        <li @click="selectAnswer(option.isCorrect)" v-for="option in question.options" :id="option.id">
            <p>{{ option.label }}</p> {{ option.text }}
        </li>
    </ol>
</template>

<style scoped>
    h1{
        padding-top: 3rem;
        font-weight: 400;
        font-size: 2.5rem;
    }

    ol{
        list-style-type: none;
        margin-top: 1rem;     
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
    }

    li{
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 2.5rem;
        width: 48rem;
        background-color: rgba(255, 166, 0, .3);
        cursor: pointer;
        transition: transform .2s;
    }

    li:hover{
        transform: translateX(1%);
    }

    p{
        display: grid;
        place-items: center;
        height: 100%;
        width: 3rem;
        background-color: orange;
    }
</style>