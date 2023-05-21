import { useId } from "react";

export type LogoType = {
  id: number;
  desc: string;
  url: string;
  src?: string;
};

const ADD_SHORTCUT = "add shortcut to taskbar" as const;
const DEL_SHORTCUT = "detete shortcut from taskbar" as const;
let idx = 3;
export const addShortcut = (url: string, src?: string) => ({
  type: ADD_SHORTCUT,
  payload: {
    id: idx++,
    url: url,
    src: src,
  },
});
export const delShortcut = (id: number) => ({
  type: DEL_SHORTCUT,
  payload: id,
});

const initialState: LogoType[] = [
  {
    id: 1,
    desc: "chrome shortcut",
    url: "https://www.google.com/",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png",
  },

  {
    id: 2,
    desc: "netflix shortcut",
    url: "https://www.netflix.com/kr/",
    src: "https://download.beer/wp-content/uploads/2021/09/netflix-mac-logo-0x0.png",
  },
];

type ShortcutAction =
  | ReturnType<typeof addShortcut>
  | ReturnType<typeof delShortcut>;
export const ShortcutReducer = (
  state = initialState,
  action: ShortcutAction
) => {
  switch (action.type) {
    case ADD_SHORTCUT:
      return state.concat({
        id: action.payload.id,
        desc: action.payload.url,
        url: action.payload.url,
        src: action.payload.src,
      });
    case DEL_SHORTCUT:
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
};
