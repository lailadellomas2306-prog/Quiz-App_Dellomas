function AnswerOption({ option, index, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
      aria-pressed={isSelected}
    >
      <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
      <span className="answer-text">{option}</span>
    </button>
  )
}

export default AnswerOption
