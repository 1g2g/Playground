import { closeModal } from "modules/ModalReducer";
import { addShortcut } from "modules/ShortcutReducer";
import { useRef } from "react";
import { useDispatch } from "react-redux";
export const InputShortcut = () => {
  const dispatch = useDispatch();
  const shortcutUrl = useRef<HTMLInputElement>(null);
  const iconSrc = useRef<HTMLInputElement>(null);

  const onSubmitShortcut = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = shortcutUrl.current?.value;
    const src = iconSrc.current?.value;

    if (url && src) {
      dispatch(addShortcut(url, src));
      dispatch(closeModal(""));
    }
  };

  return (
    <div className="input-shortcut">
      <h2>바로가기 추가</h2>
      <form onSubmit={onSubmitShortcut}>
        <input
          type="url"
          ref={shortcutUrl}
          placeholder="바로가기에 저장할 페이지의 주소를 입력해주세요"
          required
        />
        <input
          type="url"
          ref={iconSrc}
          placeholder="icon의 이미지 주소를 입력해주세요"
          required
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};
