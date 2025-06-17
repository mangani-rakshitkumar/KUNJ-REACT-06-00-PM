import React from 'react';

const QuestionCard = ({ questionData, questionNumber, totalQuestions, selectedAnswer, onAnswer }) => {
  return (
    <div className="card">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <p className="question-text">{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, idx) => {
          let className = 'option-btn';
          if (selectedAnswer) {
            if (option === questionData.correct) className += ' correct';
            else if (option === selectedAnswer) className += ' wrong';
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => onAnswer(option)}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;