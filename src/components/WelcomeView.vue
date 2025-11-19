<script setup lang="ts">
import { useQuiz } from '../composables/useQuiz';
import { TOPICS } from '../data/quizData';

const { startGame } = useQuiz();
</script>

<template>
  <div class="welcome-container">
    <div class="content-wrapper text-center">
      <h1 class="main-title mb-6 animate-fade-in">
        Master Quiz
      </h1>
      <p class="subtitle mb-8">
        Select a topic to begin your challenge
      </p>

      <div class="topics-grid">
        <div 
          v-for="topic in TOPICS" 
          :key="topic" 
          class="topic-card glass-panel"
          @click="startGame(topic)"
        >
          <div class="card-content">
            <h3 class="topic-title">{{ topic }}</h3>
            <p class="topic-desc">Test your knowledge in {{ topic }}</p>
            <button class="btn btn-primary mt-4">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.main-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-sm);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.topic-card {
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.topic-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
}

.topic-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xs);
  color: var(--text-main);
}

.topic-desc {
  color: var(--text-muted);
  margin-bottom: var(--spacing-md);
  font-size: 0.95rem;
}

.mt-4 {
  margin-top: var(--spacing-md);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
