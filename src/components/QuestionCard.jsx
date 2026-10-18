import AnswerOption from './AnswerOption'
import ProgressBar from './ProgressBar'
import QuizHeader from './QuizHeader'

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  completion,
  onAnswerSelect,
  onNext,
  isLastQuestion,
}) {
  return (
    <div className="question-card">
      <QuizHeader currentQuestion={questionNumber} totalQuestions={totalQuestions} />
      <ProgressBar value={completion} />

      <h3>{question.question}</h3>

      <div className="answer-list">
        {question.choices.map((option, index) => (
          <AnswerOption
            key={option}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>

      <button
        type="button"
        className="primary-button next-button"
        onClick={onNext}
        disabled={!selectedAnswer}
      >
        {isLastQuestion ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}

export default QuestionCard
