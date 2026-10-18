function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <div className="quiz-header">
      <p className="eyebrow">Web Development Basics</p>
      <h2>
        Question {currentQuestion} of {totalQuestions}
      </h2>
    </div>
  )
}

export default QuizHeader
