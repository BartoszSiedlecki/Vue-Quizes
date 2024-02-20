<script setup>
    import QuizBar from "../components/QuizBar.vue"
    import QuizQuestion from "../components/QuizQuestion.vue"
    import Summary from "../components/Summary.vue"
    import {useRoute} from "vue-router"
    import {ref, computed} from "vue"
    import quizes from "../data/quizes.json"

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id === quizId)
    const currentQuestionIndex = ref(0)
    const score = ref(0)
    const quizFinish = ref(false)

    function nextQuestion(isCorrect){
        currentQuestionIndex.value++
        if(isCorrect){
            score.value++
        }
        if(currentQuestionIndex.value > quiz.questions.length - 1){
            quizFinish.value = true
        }
    }

    const questionNumber = computed(() => currentQuestionIndex.value)
    const barCompletion = computed(() => ((currentQuestionIndex.value)/quiz.questions.length)*100)
</script>

<template>
    <div class="container">
        <QuizBar 
            :questionNumber="questionNumber"
            :barCompletion="barCompletion"
        />
        <QuizQuestion v-if="quizFinish === false"
            :question="quiz.questions[currentQuestionIndex]"
            @update:index="nextQuestion"
        />
        <Summary v-if="quizFinish === true"
            :score="score"
        />
    </div>
</template>

<style scoped>
    .container{
        padding: 2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>