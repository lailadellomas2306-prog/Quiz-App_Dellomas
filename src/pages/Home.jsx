import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="page-shell home-shell">
      <section className="home-card">
        <p className="eyebrow">School assignment</p>
        <h1>Web Development Basics Quiz</h1>
        <p className="lead-text">
          Test your knowledge of HTML, CSS, JavaScript and React in a quick challenge.
        </p>
        <button type="button" className="primary-button" onClick={() => navigate('/quiz')}>
          Start Quiz
        </button>
      </section>
    </main>
  )
}

export default Home
