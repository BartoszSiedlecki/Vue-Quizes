<script setup>
  import { ref, computed } from "vue"
  import { RouterView, RouterLink } from "vue-router"
  import quizData from "../data/quizes.json"
  import Card from "../components/Card.vue"

  const prompt = ref("")
  const quizes = ref(quizData)

  const quizFilter = computed(() =>{
    if(prompt.value) return quizes.value.filter((quiz) => quiz.name.toLowerCase().includes(prompt.value.toLowerCase()))
    else return quizes.value
  })

</script>

<template>
  <div>
    <nav class="navigation">
      <h1 class="header">Quizes</h1>
      <input v-model="prompt" class="search" type="text" placeholder="Search...">
    </nav>
    <div class="quizes">
      <div class="quiz" v-for="quiz in quizFilter" :key="quiz.id">
        <Card :quiz="quiz"/>
      </div>
    </div>
  </div>
</template>

<style>
    @import "../style.css";
</style>
