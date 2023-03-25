export const getNicknameLocalStorage = () => {
  return localStorage.getItem("nickname");
};
export const setNicknameLocalStorage = (nickname: string) => {
  localStorage.setItem("nickname", nickname);
};
export const getQuizLocalStorage = () => {
  return localStorage.getItem("quiz");
};
export const setQuizLocalStorage = (quiz: string) => {
  localStorage.setItem("quiz", quiz);
};
