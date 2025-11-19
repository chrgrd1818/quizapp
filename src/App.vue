<script setup lang="ts">
import { useQuiz } from './composables/useQuiz';
import WelcomeView from './components/WelcomeView.vue';
import QuizView from './components/QuizView.vue';
import ResultView from './components/ResultView.vue';

const { gameState } = useQuiz();
</script>

<template>
  <main class="app-container">
    <Transition name="fade" mode="out-in">
      <WelcomeView v-if="gameState === 'welcome'" />
      <QuizView v-else-if="gameState === 'playing'" />
      <ResultView v-else-if="gameState === 'finished'" />
    </Transition>
  </main>
</template>

<style>
.app-container {
  min-height: 100vh;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%),
              radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.15), transparent 40%);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
