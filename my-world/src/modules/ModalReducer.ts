const OPEN_MODAL = "open modal window";
const CLOSE_MODAL = "close modal window";
type Modal = {
  show: boolean;
};
export const openModal = () => ({
  type: OPEN_MODAL,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

const initialState: Modal = {
  show: false,
};
type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;

export const ModalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        show: true,
      };
    case CLOSE_MODAL:
      return {
        show: false,
      };
    default:
      return state;
  }
};
