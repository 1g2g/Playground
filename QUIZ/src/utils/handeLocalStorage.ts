export const getNicknameLocalStorage = () => {
  return localStorage.getItem("nickname");
};
export const setNicknameLocalStorage = (nickname: string) => {
  localStorage.setItem("nickname", nickname);
};
