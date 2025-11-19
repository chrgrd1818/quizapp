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
  padding: 2rem;
}
</style>
