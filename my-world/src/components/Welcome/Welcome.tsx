import { useEffect, useRef, useState } from "react";
import SPINNER from "assets/img/loading.png";

export const Welcome = () => {
  const [nickname, setNickname] = useState<String | null>(null);
  const [fadeOutEffect, setFadeOutEffect] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const onSubmitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current) {
      localStorage.setItem("nickname", nameRef.current.value);
      setNickname(nameRef.current.value);
    }
  };

  useEffect(() => {
    const storedNick = localStorage.getItem("nickname");
    if (storedNick) setNickname(storedNick);
  }, []);

  useEffect(() => {
    if (nickname === null) return;

    setFadeOutEffect("fadeout");
    const timer = setTimeout(() => {
      const welcomeSection = document.getElementById("welcome");
      if (welcomeSection) {
        setFadeOutEffect((prev) => prev + " disappearWelcome");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [nickname]);

  return (
    <section className={`welcome ${fadeOutEffect}`} id="welcome">
      {nickname ? (
        <>
          <h1>Welcome {nickname}</h1>
          <div className="loading">
            <img src={SPINNER} alt="spinner for loading" />
          </div>
        </>
      ) : (
        <>
          <h2>반갑습니다</h2>
          <form onSubmit={onSubmitName}>
            <input
              type="text"
              ref={nameRef}
              placeholder="사용자 이름을 입력해주세요"
            />
          </form>
        </>
      )}
    </section>
  );
};
