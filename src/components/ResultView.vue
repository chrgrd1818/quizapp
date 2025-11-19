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
  <div class="container has-text-centered py-6">
    <div class="column is-6 is-offset-3">
      <div class="card glass-panel animate-pop-in">
        <div class="card-content">
          <h2 class="title is-2 mb-4">Quiz Completed!</h2>
          <p class="subtitle is-5 mb-6">Topic: {{ currentTopic }}</p>
          
          <div class="score-circle mb-6">
            <span class="title is-1">{{ score }} / {{ totalQuestions }}</span>
          </div>

          <h3 class="title is-4 mb-6 has-text-primary">{{ message }}</h3>

          <button 
            class="button is-primary is-large is-rounded is-fullwidth"
            @click="restartGame"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid var(--bulma-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: rgba(255,255,255,0.05);
}

.animate-pop-in {
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
</style>
