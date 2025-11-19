<script setup lang="ts">
import { useQuiz } from '../composables/useQuiz';
import { computed } from 'vue';

const { score, totalQuestions, restartGame, currentTopic } = useQuiz();

const percentage = computed(() => Math.round((score.value / totalQuestions.value) * 100));

const message = computed(() => {
  if (percentage.value === 100) return "Perfect! You're a Master!";
  if (percentage.value >= 70) return "Great Job!";
  if (percentage.value >= 50) return "Good Effort!";
  return "Keep Practicing!";
});
</script>

<template>
  <div class="result-container">
    <div class="glass-panel result-card animate-pop-in">
      <h2 class="result-title mb-4">Quiz Completed!</h2>
      <p class="result-subtitle mb-6">Topic: <span class="highlight">{{ currentTopic }}</span></p>
      
      <div class="score-circle mb-6">
        <span class="score-text">{{ score }} / {{ totalQuestions }}</span>
      </div>

      <h3 class="message-text mb-8">{{ message }}</h3>

      <button 
        class="btn btn-primary btn-lg"
        @click="restartGame"
      >
        Play Again
      </button>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.result-card {
  padding: var(--spacing-xl);
  text-align: center;
  width: 100%;
}

.result-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(to right, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.result-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
}

.highlight {
  color: var(--text-main);
  font-weight: 600;
}

.score-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%);
  border: 4px solid var(--primary);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.score-text {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
}

.message-text {
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 600;
}

.btn-lg {
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
}

.animate-pop-in {
  animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
</style>
