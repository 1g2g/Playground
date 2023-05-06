export type Note = {
  code: string;
  notepad: string;
};
const NOTE_PAD = "add text to notepad store" as const;
const CODE_BLOCK = "add codeblock to codeblock store" as const;
export const storeNotepad = (text: string) => ({
  type: NOTE_PAD,
  payload: text,
});
export const storeCode = (text: string) => ({
  type: CODE_BLOCK,
  payload: text,
});
type NoteAction =
  | ReturnType<typeof storeNotepad>
  | ReturnType<typeof storeCode>;
const initialState: Note = {
  code: "",
  notepad: "",
};
export function NoteReducer(state: Note = initialState, action: NoteAction) {
  switch (action.type) {
    case NOTE_PAD:
      return {
        code: state.code,
        notepad: action.payload,
      };
    case CODE_BLOCK:
      return {
        code: action.payload,
        notepad: state.notepad,
      };
    default:
      return state;
  }
}
