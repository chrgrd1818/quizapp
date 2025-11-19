<script setup lang="ts">
import { useQuiz } from '../composables/useQuiz';
import { ref, watch } from 'vue';

const { currentQuestion, currentQuestionIndex, totalQuestions, submitAnswer, progress } = useQuiz();

const selectedOption = ref<number | null>(null);

// Reset selection when question changes
watch(currentQuestionIndex, () => {
  selectedOption.value = null;
});

const handleAnswer = (index: number) => {
  if (selectedOption.value !== null) return; // Prevent multiple clicks
  selectedOption.value = index;
  submitAnswer(index);
};

const getButtonClass = (index: number) => {
  if (selectedOption.value === null) return '';
  
  if (index === currentQuestion.value?.correctAnswer) {
    return 'correct';
  }
  
  if (selectedOption.value === index && index !== currentQuestion.value?.correctAnswer) {
    return 'wrong';
  }
  
  return '';
};
</script>

<template>
  <div class="quiz-container">
    <div class="quiz-content">
      
      <!-- Progress -->
      <div class="progress-section mb-6">
        <div class="progress-info mb-2">
          <span class="question-count">Question {{ currentQuestionIndex + 1 }} <span class="text-muted">/ {{ totalQuestions }}</span></span>
          <span class="progress-percent">{{ Math.round(progress) }}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>

      <!-- Question Card -->
      <div class="glass-panel question-card mb-6">
        <h2 class="question-text">
          {{ currentQuestion?.text }}
        </h2>
      </div>

      <!-- Options -->
      <div class="options-grid">
        <button 
          v-for="(option, index) in currentQuestion?.options" 
          :key="index"
          class="btn option-btn"
          :class="getButtonClass(index)"
          @click="handleAnswer(index)"
          :disabled="selectedOption !== null"
        >
          {{ option }}
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--text-main);
}

.text-muted {
  color: var(--text-muted);
  font-weight: 400;
}

.progress-bar-bg {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.5s ease;
  border-radius: var(--radius-full);
}

.question-card {
  padding: var(--spacing-lg);
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-text {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
}

.options-grid {
  display: grid;
  gap: var(--spacing-md);
}

.option-btn {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  font-size: 1.1rem;
  padding: 1.25rem;
  justify-content: center;
  transition: all 0.2s ease;
}

.option-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary);
  transform: translateY(-2px);
}

.option-btn.correct {
  background: rgba(34, 197, 94, 0.2);
  border-color: var(--success);
  color: var(--success);
}

.option-btn.wrong {
  background: rgba(239, 68, 68, 0.2);
  border-color: var(--error);
  color: var(--error);
}
</style>
