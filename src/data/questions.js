const questions = [
  {
    id: 1,
    question: 'Which HTML element is used to mark the main content of a page?',
    choices: ['<main>', '<section>', '<article>', '<div>'],
    correctAnswer: '<main>',
  },
  {
    id: 2,
    question: 'Which CSS selector targets an element with a unique ID?',
    choices: ['.card', '#hero', 'element', 'a[href]'],
    correctAnswer: '#hero',
  },
  {
    id: 3,
    question: 'Which CSS property adds space between flex items?',
    choices: ['padding', 'margin', 'gap', 'border'],
    correctAnswer: 'gap',
  },
  {
    id: 4,
    question: 'Which JavaScript function converts a value into a number?',
    choices: ['parseText()', 'String()', 'Number()', 'toFixed()'],
    correctAnswer: 'Number()',
  },
  {
    id: 5,
    question: 'What does the strict equality operator check in JavaScript?',
    choices: ['Only value', 'Only type', 'Both value and type', 'Only truthiness'],
    correctAnswer: 'Both value and type',
  },
  {
    id: 6,
    question: 'Which React hook is used to store local state in a component?',
    choices: ['useMemo', 'useState', 'useRef', 'useEffect'],
    correctAnswer: 'useState',
  },
  {
    id: 7,
    question: 'What is the main purpose of a key prop in a list of React elements?',
    choices: ['To style each item', 'To help React identify which items changed', 'To store user input', 'To create a link'],
    correctAnswer: 'To help React identify which items changed',
  },
  {
    id: 8,
    question: 'Which CSS layout system is designed for arranging items in one dimension?',
    choices: ['Grid', 'Flexbox', 'Positioning', 'Flow layout'],
    correctAnswer: 'Flexbox',
  },
  {
    id: 9,
    question: 'What does the DOMContentLoaded event let you know?',
    choices: ['The page has fully loaded images', 'The browser has finished parsing the HTML', 'The user has clicked an element', 'The CSS is ready to run'],
    correctAnswer: 'The browser has finished parsing the HTML',
  },
  {
    id: 10,
    question: 'Which HTML attribute gives an image a text description for accessibility?',
    choices: ['title', 'src', 'alt', 'data-label'],
    correctAnswer: 'alt',
  },
]

export default questions
