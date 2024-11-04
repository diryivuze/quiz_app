import { useQuiz } from '../contexts/QuizContext';
import QuestionCard from '../components/quiz/QuestionCard';
import ProgressBar from '../components/quiz/ProgressBar';

function Quiz() {
  const { currentQuestionIndex, setCurrentQuestionIndex, score, setScore } = useQuiz();
  const questions = [ /* Array of question objects */ ];

  const handleAnswer = (index) => {
    if (questions[currentQuestionIndex].correctIndex === index) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="container mx-auto p-6">
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      {questions[currentQuestionIndex] ? (
        <QuestionCard 
          question={questions[currentQuestionIndex].question} 
          options={questions[currentQuestionIndex].options} 
          onAnswer={handleAnswer} 
        />
      ) : (
        <p className="text-center">Quiz Completed!</p>
      )}
    </div>
  );
}

export default Quiz;
