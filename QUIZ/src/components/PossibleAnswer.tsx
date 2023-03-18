import React from "react";
import { Quiz } from "../type/QuizApi";

type Props = {
  quiz: Quiz | undefined;
  handleAnswer: (selected: string | null) => void;
};

const AnswerList = ({ quiz, handleAnswer }: Props) => {
  if (!quiz) {
    return null;
  }
  return (
    <ul>
      {quiz.possibleAnswers.map((answer, i) => (
        <li key={i} value={answer} onClick={() => handleAnswer(answer)}>
          {answer}
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;
