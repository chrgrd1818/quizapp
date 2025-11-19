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
  if (selectedOption.value === null) return 'is-white is-outlined';
  
  if (index === currentQuestion.value?.correctAnswer) {
    return 'is-success';
  }
  
  if (selectedOption.value === index && index !== currentQuestion.value?.correctAnswer) {
    return 'is-danger';
  }
  
  return 'is-white is-outlined';
};
</script>

<template>
  <div class="container is-max-desktop py-6">
    <div class="columns is-centered">
      <div class="column is-8">
        
        <!-- Progress -->
        <div class="mb-6">
          <div class="is-flex is-justify-content-space-between mb-2">
            <span class="has-text-weight-bold">Question {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}</span>
            <span>{{ Math.round(progress) }}%</span>
          </div>
          <progress class="progress is-primary is-small" :value="progress" max="100"></progress>
        </div>

        <!-- Question Card -->
        <div class="card glass-panel mb-6">
          <div class="card-content">
            <h2 class="title is-3 has-text-centered mb-4">
              {{ currentQuestion?.text }}
            </h2>
          </div>
        </div>

        <!-- Options -->
        <div class="columns is-multiline">
          <div 
            v-for="(option, index) in currentQuestion?.options" 
            :key="index"
            class="column is-12"
          >
            <button 
              class="button is-fullwidth is-large is-rounded transition-all"
              :class="getButtonClass(index)"
              @click="handleAnswer(index)"
              :disabled="selectedOption !== null"
            >
              {{ option }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
.button.is-white.is-outlined:hover {
  background-color: rgba(255,255,255,0.1);
  color: white;
  border-color: white;
}
</style>
