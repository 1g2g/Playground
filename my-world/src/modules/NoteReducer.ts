type Note = {
  notepad: string;
};

const NOTE_PAD = "add text to notepad store" as const;

export const storeNotepad = (text: string) => ({
  type: NOTE_PAD,
  payload: text,
});

type NoteAction = ReturnType<typeof storeNotepad>;

const initialState: Note = {
  notepad: "",
};

export function NoteReducer(state: Note = initialState, action: NoteAction) {
  switch (action.type) {
    case NOTE_PAD:
      return {
        notepad: action.payload,
      };
    default:
      return state;
  }
}
