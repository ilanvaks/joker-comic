import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

interface QuizQuestion {
  question: string;
  questionType: string;
  answerSelectionType: string;
  answers: string[];
  correctAnswer: string;
  messageForCorrectAnswer: string;
  messageForIncorrectAnswer: string;
  explanation: string;
}

interface Quiz {
  quizTitle: string;
  quizSynopsis: string;
  questions: QuizQuestion[];
}

const initialQuiz: Quiz = {
  quizTitle: 'Comic Quiz',
  quizSynopsis: 'How well do you know the story so far?',
  questions: [
    {
      question: 'Who is the main character?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Character 1', 'Character 2', 'Character 3', 'Character 4'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Sorry, that\'s not correct.',
      explanation: 'The main character is Character 1.',
    },
    // more questions...
  ]
};

const OffCanvasQuiz: React.FC = () => {
  const [show, setShow] = useState(false);
  const [quiz, setQuiz] = useState(initialQuiz);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='off-cover'>
      <Button variant="primary" onClick={handleShow}>
        Open Quiz
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{quiz.quizTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Replace this with your actual quiz component */}
          <p>{quiz.quizSynopsis}</p>
          {quiz.questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              {question.answers.map((answer, i) => (
                <Button key={i}>{answer}</Button>
              ))}
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </>
  );
}

export default OffCanvasQuiz;
