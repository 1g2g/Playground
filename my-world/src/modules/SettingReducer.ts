export const SET_COLOR = "set theme color" as const;
const SET_NICKNAME = "set nickname" as const;
type SettingsType = {
  color: string;
  nickname: string | null;
};
export const setColor = (color: string) => ({
  type: SET_COLOR,
  payload: color,
});
export const setNickname = (nickname: string) => ({
  type: SET_NICKNAME,
  payload: nickname,
});

const initialState = {
  color: "#3c3cc9",
  nickname: null,
};
type ColorAction = ReturnType<typeof setColor> | ReturnType<typeof setNickname>;

export function SettingReducer(
  state: SettingsType = initialState,
  action: ColorAction
) {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.payload,
      };
    default:
      return state;
  }
}

export default SettingReducer;
