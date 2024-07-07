import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60); 

  const questions = [
    {
      questionText: ' Who was the first person to step on the Moon?',
      answerOptions: [
        { answerText: 'James', isCorrect: false },
        { answerText: 'Alan Bean', isCorrect: false },
        { answerText: 'Neil Armstrong', isCorrect: true },
        { answerText: 'Kalpana Chawla', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the longest river in the world?',
      answerOptions: [
        { answerText: 'Nile River', isCorrect: true },
        { answerText: 'Gnaga River', isCorrect: false},
        { answerText: 'Bramaputra', isCorrect: false },
        { answerText: 'Godavari River', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: [
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Pluto', isCorrect: false},
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Earth', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the square root of 144?',
      answerOptions: [
        { answerText: '12', isCorrect: true },
        { answerText: '11', isCorrect: false},
        { answerText: '13', isCorrect: false },
        { answerText: '14', isCorrect: false },
      ],
    },
    {
      questionText: 'How many sides does a hexagon has?',
      answerOptions: [
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: false},
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the chemical formula for water?',
      answerOptions: [
        { answerText: 'ch3', isCorrect: false },
        { answerText: 'h2o', isCorrect: true},
        { answerText: 'ch4', isCorrect: false },
        { answerText: 'o2', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?',
      answerOptions: [
        { answerText: '10', isCorrect: false },
        { answerText: '11', isCorrect: false},
        { answerText: '12', isCorrect: false },
        { answerText: '13', isCorrect: true },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (secondsLeft > 0 && !showScore) {
      const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft, showScore]);

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <div className='timer'>Time Left: {secondsLeft} seconds</div>
    </div>
  );
};

export default Quiz;
