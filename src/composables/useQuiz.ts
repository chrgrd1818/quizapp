import { ref, computed } from 'vue';
import { type Topic, type Question, QUIZ_DATA } from '../data/quizData';

export type GameState = 'welcome' | 'playing' | 'finished';

const gameState = ref<GameState>('welcome');
const currentTopic = ref<Topic | null>(null);
const currentQuestions = ref<Question[]>([]);
const currentQuestionIndex = ref(0);
const score = ref(0);
const selectedSetIndex = ref(0);

export function useQuiz() {

    const startGame = (topic: Topic) => {
        currentTopic.value = topic;
        // Randomly select one of the 3 sets for the topic
        const sets = QUIZ_DATA[topic];
        const randomSetIndex = Math.floor(Math.random() * sets.length);
        selectedSetIndex.value = randomSetIndex;

        currentQuestions.value = sets[randomSetIndex];
        currentQuestionIndex.value = 0;
        score.value = 0;
        gameState.value = 'playing';
    };

    const submitAnswer = (optionIndex: number) => {
        const question = currentQuestions.value[currentQuestionIndex.value];
        if (question.correctAnswer === optionIndex) {
            score.value++;
        }

        if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
            setTimeout(() => {
                currentQuestionIndex.value++;
            }, 500); // Small delay for feedback
        } else {
            setTimeout(() => {
                gameState.value = 'finished';
            }, 500);
        }
    };

    const restartGame = () => {
        gameState.value = 'welcome';
        currentTopic.value = null;
        currentQuestions.value = [];
        score.value = 0;
    };

    const currentQuestion = computed(() => {
        if (currentQuestions.value.length === 0) return null;
        return currentQuestions.value[currentQuestionIndex.value];
    });

    const progress = computed(() => {
        if (currentQuestions.value.length === 0) return 0;
        return ((currentQuestionIndex.value) / currentQuestions.value.length) * 100;
    });

    return {
        gameState,
        currentTopic,
        currentQuestion,
        currentQuestionIndex,
        totalQuestions: computed(() => currentQuestions.value.length),
        score,
        progress,
        startGame,
        submitAnswer,
        restartGame
    };
}
