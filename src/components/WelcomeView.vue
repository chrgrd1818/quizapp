<script setup lang="ts">
import { useQuiz } from '../composables/useQuiz';
import { TOPICS } from '../data/quizData';

const { startGame } = useQuiz();
</script>

<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1 mb-6 animate-fade-in">
          Master Quiz
        </h1>
        <p class="subtitle is-4 mb-6">
          Select a topic to begin your challenge
        </p>

        <div class="columns is-multiline is-centered">
          <div v-for="topic in TOPICS" :key="topic" class="column is-4">
            <div 
              class="card glass-panel topic-card"
              @click="startGame(topic)"
            >
              <div class="card-content">
                <div class="content">
                  <h3 class="title is-3">{{ topic }}</h3>
                  <p>Test your knowledge in {{ topic }}</p>
                  <button class="button is-primary is-rounded mt-4">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.topic-card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  border-color: rgba(255,255,255,0.5);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
