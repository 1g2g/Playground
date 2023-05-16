import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setNickname } from "modules/SettingReducer";
import "components/Welcome/welcome.scss";

export const NickNameInput = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);

  const onSubmitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current) {
      dispatch(setNickname(nameRef.current.value));
    }
  };
  return (
    <form onSubmit={onSubmitName}>
      <input
        type="text"
        ref={nameRef}
        placeholder="사용자 이름을 입력해주세요"
      />
    </form>
  );
};
