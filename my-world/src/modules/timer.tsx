export type Time = {
  id: number;
  time: Date;
};

export type TimeList = Time[];

let nextId = 1;
const START_TIMER = "start timer" as const;
const STOP_TIMER = "stop timer" as const;
const RESET_TIMER = "reset timer" as const;

export const startTimer = () => ({
  type: START_TIMER,
  payload: {
    id: nextId++,
    record: false,
    time: new Date(),
  },
});
export const stopTimer = (time: Date) => ({
  type: STOP_TIMER,
  payload: {
    id: nextId,
    record: true,
    time,
  },
});
export const resetTimer = (id: number) => ({
  type: RESET_TIMER,
  payload: id,
});
type TimerAction =
  | ReturnType<typeof startTimer>
  | ReturnType<typeof stopTimer>
  | ReturnType<typeof resetTimer>;
export function timer(state: TimeList, action: TimerAction): TimeList {
  switch (action.type) {
    case START_TIMER:
      return state.concat({
        id: action.payload.id,
        time: action.payload.time,
      });
    case STOP_TIMER:
      return state.concat({
        id: action.payload.id,
        time: action.payload.time,
      });
    default:
      return state;
  }
}
