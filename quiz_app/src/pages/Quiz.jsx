import { useQuiz } from '../contexts/QuizContext';
import QuestionCard from '../components/quiz/QuestionCard';
import ProgressBar from '../components/quiz/ProgressBar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Quiz() {
  const { currentQuestionIndex, setCurrentQuestionIndex, score, setScore, completed, setCompleted } = useQuiz();
  const questions = [ /* Array of question objects */ ];

  const handleAnswer = (index) => {
    if (questions[currentQuestionIndex].correctIndex === index) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center mb-6">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[60, 40, 20, 0]}
          onComplete={() => setCompleted(true)}
        >
          {({ remainingTime }) => <span className="text-xl">{remainingTime}s</span>}
        </CountdownCircleTimer>
      </div>

      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

      {completed ? (
        <p className="text-center text-2xl font-semibold">Quiz Completed!</p>
      ) : (
        questions[currentQuestionIndex] && (
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
          />
        )
      )}
    </div>
  );
}

export default Quiz;
