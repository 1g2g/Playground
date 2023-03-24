import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { quizApi } from "../api/quizApi";
import { quizType } from "../type/interface";
import PossibleAnswer from "../components/PossibleAnswer";
import { ButtonExpansion } from "../components/ButtonExpansion";

const Game = () => {
  const [quizes, setQuizes] = useState<quizType[]>([]);
  const [solvingNum, setSolvingNum] = useState(0);
  const [quiz, setQuiz] = useState<quizType>();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const navigate = useNavigate();
  useEffect(() => {
    const callApi = async () => {
      const response = await quizApi();
      if (response.result === "success") {
        setQuizes(response.quiz);
        setQuiz(response.quiz[0]);
      } else {
        return;
      }
    };
    callApi();
  }, []);
  useEffect(() => {
    if (solvingNum < quizes.length - 1) {
      setQuiz(quizes[solvingNum + 1]);
    }
  }, [solvingNum, quizes]);
  useEffect(() => {
    if (quiz?.id === 2038 || quiz?.id === 3034 || quiz?.id === 2253) {
      navigate("/");
      alert(`축하합니다 ${score}점입니다`);
    }
    if (quiz) countDown();
  }, [quiz]);

  const setNextQuiz = () => {
    if (solvingNum < quizes.length - 1) {
      setSolvingNum((prev) => prev + 1);
      setTime(10);
    }
  };
  const handleAnswer = (selected: string | null) => {
    if (selected === quiz?.correctAnswer) {
      alert("정답입니다.");
      setNextQuiz();
      setScore((prev) => prev + 1);
    }
  };
  const countDown = () => {
    clearInterval(timerId);
    setTimerId(undefined);
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          setNextQuiz();
        }
        return prev - 1;
      });
    }, 1000);
    setTimerId(timer);
  };
  return (
    <>
      <section className="quizArea">
        <div>
          Your Score is {score}/{solvingNum}
        </div>
        <div className="question">{quiz?.question}</div>
        <span> {time}s left</span>

        <PossibleAnswer quiz={quiz} handleAnswer={handleAnswer} />
        <div className="toNextQuestion" onClick={setNextQuiz}>
          다음으로 넘어가기
        </div>
        <ButtonExpansion
          pageToGo=""
          originClass="backToHome"
          extraClass="btnExpansion"
        />
      </section>
    </>
  );
};

export default Game;
