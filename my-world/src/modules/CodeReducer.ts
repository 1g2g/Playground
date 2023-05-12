export type Note = {
  lang: string;
  code: string;
};
const ADD_CODE = "add codeblock to store" as const;
const DELETE_CODE = "delete code block from store" as const;
export const storeCode = (text: string, lang: string) => ({
  type: ADD_CODE,
  payload: {
    text,
    lang,
  },
});
export const removeCode = () => ({
  type: DELETE_CODE,
});
type NoteAction = ReturnType<typeof storeCode> | ReturnType<typeof removeCode>;
const initialState: Note = {
  code: "",
  lang: "javascript",
};
export function CodeReducer(state: Note = initialState, action: NoteAction) {
  switch (action.type) {
    case ADD_CODE:
      return {
        code: action.payload.text,
        lang: action.payload.lang,
      };
    case DELETE_CODE:
      return {
        code: "",
        lang: "",
      };
    default:
      return state;
  }
}
