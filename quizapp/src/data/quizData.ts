export type Topic = 'History' | 'Google' | 'Languages';

export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // index of the correct option
}

export const TOPICS: Topic[] = ['History', 'Google', 'Languages'];

export const QUIZ_DATA: Record<Topic, Question[][]> = {
    History: [
        // Set 1
        [
            {
                id: 1,
                text: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "In which year did World War II end?",
                options: ["1945", "1939", "1918"],
                correctAnswer: 0
            },
            {
                id: 3,
                text: "Which empire built the Colosseum?",
                options: ["Greek Empire", "Roman Empire", "Ottoman Empire"],
                correctAnswer: 1
            }
        ],
        // Set 2
        [
            {
                id: 4,
                text: "Who discovered America in 1492?",
                options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"],
                correctAnswer: 0
            },
            {
                id: 5,
                text: "The French Revolution began in which year?",
                options: ["1789", "1799", "1815"],
                correctAnswer: 0
            },
            {
                id: 6,
                text: "Who was known as the 'Maid of Orléans'?",
                options: ["Marie Antoinette", "Joan of Arc", "Catherine the Great"],
                correctAnswer: 1
            }
        ],
        // Set 3
        [
            {
                id: 7,
                text: "Which ancient civilization built the pyramids?",
                options: ["Mayans", "Egyptians", "Aztecs"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "The Berlin Wall fell in which year?",
                options: ["1987", "1989", "1991"],
                correctAnswer: 1
            }
        ]
    ],
    Google: [
        // Set 1
        [
            {
                id: 10,
                text: "In what year was Google founded?",
                options: ["1996", "1998", "2000"],
                correctAnswer: 1
            },
            {
                id: 11,
                text: "What was Google's original name?",
                options: ["BackRub", "Googol", "SearchMaster"],
                correctAnswer: 0
            },
            {
                id: 12,
                text: "Who are the founders of Google?",
                options: ["Steve Jobs & Wozniak", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen"],
                correctAnswer: 1
            }
        ],
        // Set 2
        [
            {
                id: 13,
                text: "What is the name of Google's parent company?",
                options: ["Alphabet Inc.", "Google Corp.", "Omega Group"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "Which of these is NOT a Google product?",
                options: ["Android", "Chrome", "Bing"],
                correctAnswer: 2
            },
            {
                id: 15,
                text: "What is the name of the Googleplex headquarters city?",
                options: ["San Francisco", "Mountain View", "Palo Alto"],
                correctAnswer: 1
            }
        ],
        // Set 3
        [
            {
                id: 16,
                text: "Which mobile OS is developed by Google?",
                options: ["iOS", "Android", "HarmonyOS"],
                correctAnswer: 1
            },
            {
                id: 17,
                text: "What color is the 'G' in the Google logo NOT?",
                options: ["Blue", "Green", "Purple"],
                correctAnswer: 2
            },
            {
                id: 18,
                text: "Google acquired YouTube in which year?",
                options: ["2005", "2006", "2008"],
                correctAnswer: 1
            }
        ]
    ],
    Languages: [
        // Set 1
        [
            {
                id: 19,
                text: "Which language has the most native speakers?",
                options: ["English", "Spanish", "Mandarin Chinese"],
                correctAnswer: 2
            },
            {
                id: 20,
                text: "What is the official language of Brazil?",
                options: ["Spanish", "Portuguese", "Brazilian"],
                correctAnswer: 1
            },
            {
                id: 21,
                text: "How many official languages does Switzerland have?",
                options: ["2", "3", "4"],
                correctAnswer: 2
            }
        ],
        // Set 2
        [
            {
                id: 22,
                text: "Which is the most widely spoken language in the world (total speakers)?",
                options: ["English", "Mandarin", "Hindi"],
                correctAnswer: 0
            },
            {
                id: 23,
                text: "The word 'Sushi' comes from which language?",
                options: ["Chinese", "Korean", "Japanese"],
                correctAnswer: 2
            },
            {
                id: 24,
                text: "Which language is written from right to left?",
                options: ["Russian", "Arabic", "Greek"],
                correctAnswer: 1
            }
        ],
        // Set 3
        [
            {
                id: 25,
                text: "What is the 'Lingua Franca' of the modern world?",
                options: ["French", "English", "Latin"],
                correctAnswer: 1
            },
            {
                id: 26,
                text: "Which language family does English belong to?",
                options: ["Romance", "Germanic", "Slavic"],
                correctAnswer: 1
            },
            {
                id: 27,
                text: "Hola is Hello in which language?",
                options: ["Italian", "French", "Spanish"],
                correctAnswer: 2
            }
        ]
    ]
};
