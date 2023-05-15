export const SET_COLOR = "set theme color" as const;

export const setColor = (color: string) => ({
  type: SET_COLOR,
  payload: color,
});

const initialState = {
  color: "#3c3cc9",
};
type ColorAction = ReturnType<typeof setColor>;

export function SettingReducer(state = initialState, action: ColorAction) {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}

export default SettingReducer;
