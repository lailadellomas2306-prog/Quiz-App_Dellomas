import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import ResultCard from '../components/ResultCard'

function Result() {
  const location = useLocation()
  const navigate = useNavigate()

  if (!location.state) {
    return <Navigate to="/" replace />
  }

  const { score = 0, answers = [], total = 0 } = location.state
  const percentage = total ? Math.round((score / total) * 100) : 0

  return (
    <main className="page-shell result-shell">
      <ResultCard
        totalQuestions={total}
        score={score}
        percentage={percentage}
        onRetake={() => navigate('/quiz', { replace: true })}
        onHome={() => navigate('/', { replace: true })}
      />
      <div className="answer-summary">
        <h3>Your answers</h3>
        <ul>
          {answers.map((answer) => (
            <li key={answer.questionId} className={answer.isCorrect ? 'correct' : 'incorrect'}>
              <span>Question {answer.questionId}</span>
              <span>{answer.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Result
