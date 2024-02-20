import { createRouter, createWebHistory } from "vue-router"
import Home from "../App.vue"
import QuizesView from "../views/QuizesView.vue"
import Quiz from "../views/Quiz.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizesView,
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: Quiz,
        }
    ]
})

export default router