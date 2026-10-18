function ResultCard({ totalQuestions, score, percentage, onRetake, onHome }) {
  const incorrectAnswers = totalQuestions - score

  return (
    <div className="result-card">
      <p className="eyebrow">Results</p>
      <h2>Quiz Complete</h2>

      <div className="score-display">
        <span>{score}</span>
        <span className="score-divider">/</span>
        <span>{totalQuestions}</span>
      </div>

      <div className="result-summary">
        <div>
          <strong>{percentage}%</strong>
          <span>Accuracy</span>
        </div>
        <div>
          <strong>{score}</strong>
          <span>Correct</span>
        </div>
        <div>
          <strong>{incorrectAnswers}</strong>
          <span>Incorrect</span>
        </div>
      </div>

      <div className="button-row">
        <button type="button" className="primary-button" onClick={onRetake}>
          Retake Quiz
        </button>
        <button type="button" className="secondary-button" onClick={onHome}>
          Return Home
        </button>
      </div>
    </div>
  )
}

export default ResultCard
