import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';

const questions = [
  { question: 'Capital of India?', options: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'], correct: 'Delhi' },
  { question: '2 + 2 = ?', options: ['3', '4', '5', '6'], correct: '4' },
  { question: 'Painted Mona Lisa?', options: ['Picasso', 'Da Vinci', 'Van Gogh', 'Michelangelo'], correct: 'Da Vinci' },
  { question: 'Gas in photosynthesis?', options: ['Oxygen', 'Carbon Dioxide', 'Hydrogen', 'Nitrogen'], correct: 'Carbon Dioxide' },
  { question: 'Fastest land animal?', options: ['Lion', 'Tiger', 'Cheetah', 'Horse'], correct: 'Cheetah' },
  { question: 'Largest ocean?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], correct: 'Pacific' },
  { question: 'HTML stands for?', options: ['HyperText Markup Language', 'Markdown', 'None', 'Markup Sheet'], correct: 'HyperText Markup Language' },
  { question: 'React by?', options: ['Google', 'Facebook', 'Amazon', 'Apple'], correct: 'Facebook' },
  { question: 'Boiling point of water?', options: ['90°C', '80°C', '120°C', '100°C'], correct: '100°C' },
  { question: 'Continents?', options: ['5', '6', '7', '8'], correct: '7' },
];

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showScore, setShowScore] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowScore(false);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const scoreMessage = score > 7 ? "🎉 Great job!" : score > 4 ? "👍 Good effort!" : "📚 Keep practicing!";

  return (
    <div className="app-container">
      <h1>Quiz App</h1>

      {!started ? (
        <div className="start-screen">
          <p>Test your knowledge with 10 quick questions.</p>
          <button className="start-btn" onClick={handleStart}>Start Quiz</button>
        </div>
      ) : !showScore ? (
        <>
          <div className="progress-bar">
            <div className="filled" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
          </div>
          <div className="score-preview">Score: {score}</div>
          <QuestionCard
            questionData={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <p>{scoreMessage}</p>
          <button onClick={handleStart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;