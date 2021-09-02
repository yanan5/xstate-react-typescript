import { Machine } from "xstate";

const ToggleMachine = Machine({
  id: "ToggleMachine",
  initial: "OFF",
  states: {
    ON: {
      on: {
        TOGGLE: "OFF"
      }
    },
    OFF: {
      on: {
        TOGGLE: "ON"
      }
    }
  }
});

export default ToggleMachine;
