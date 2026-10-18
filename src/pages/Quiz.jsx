import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import questions from '../data/questions'

const initialState = {
  currentQuestion: 0,
  selectedAnswer: '',
  score: 0,
  completion: 10,
  history: [],
}

function Quiz() {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(initialState.currentQuestion)
  const [selectedAnswer, setSelectedAnswer] = useState(initialState.selectedAnswer)
  const [score, setScore] = useState(initialState.score)
  const [completion, setCompletion] = useState(initialState.completion)
  const [history, setHistory] = useState(initialState.history)

  useEffect(() => {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setCompletion((1 / questions.length) * 100)
    setHistory([])
  }, [location.pathname])

  useEffect(() => {
    setCompletion(((currentQuestion + 1) / questions.length) * 100)
  }, [currentQuestion])

  const activeQuestion = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleNext = () => {
    if (!selectedAnswer) {
      return
    }

    const isCorrect = selectedAnswer === activeQuestion.correctAnswer
    const updatedHistory = [
      ...history,
      {
        questionId: activeQuestion.id,
        selectedAnswer,
        isCorrect,
        correctAnswer: activeQuestion.correctAnswer,
      },
    ]
    const nextScore = isCorrect ? score + 1 : score

    if (isLastQuestion) {
      navigate('/result', {
        state: {
          score: nextScore,
          answers: updatedHistory,
          total: questions.length,
        },
      })
      return
    }

    setHistory(updatedHistory)
    setScore(nextScore)
    setSelectedAnswer('')
    setCurrentQuestion((prev) => prev + 1)
  }

  return (
    <main className="page-shell quiz-shell">
      <QuestionCard
        question={activeQuestion}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        completion={completion}
        onAnswerSelect={setSelectedAnswer}
        onNext={handleNext}
        isLastQuestion={isLastQuestion}
      />
    </main>
  )
}

export default Quiz
