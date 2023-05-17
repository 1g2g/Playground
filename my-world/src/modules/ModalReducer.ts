const OPEN_MODAL = "open modal window";
const CLOSE_MODAL = "close modal window";
type Modal = {
  show: boolean;
  modalName: string;
};

export const openModal = (modalName: string) => ({
  type: OPEN_MODAL,
  payload: modalName,
});
export const closeModal = (modalName: string) => ({
  type: CLOSE_MODAL,
  payload: modalName,
});

const initialState: Modal = {
  show: false,
  modalName: "",
};
type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;

export const ModalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalName: action.payload,
        show: true,
      };
    case CLOSE_MODAL:
      return {
        modalName: action.payload,
        show: false,
      };
    default:
      return state;
  }
};
