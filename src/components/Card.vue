<script setup>
    import { defineProps } from 'vue'
    import { useRouter } from "vue-router"

    const router = useRouter()
    const {quiz} = defineProps(["quiz"])

    const navigateToQuiz = () =>{
        router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
    <div @click="navigateToQuiz" class="panel">
        <div class="img"><img :src="quiz.img" alt="quiz-image"></div>
        <h2 class="title">{{ quiz.name }}</h2>
        <p class="desc">{{ quiz.questions.length }} questions</p>
    </div>
</template>

<style scoped>
    .panel{
        height: 100%;
        width: 100%;
    }
</style>