import { Machine, assign } from "xstate";

const ToggleMachine = Machine(
  {
    id: "ToggleMachine",
    initial: "OFF",
    context: {
      isXstateAwesome: false
    },
    states: {
      ON: {
        on: {
          TOGGLE: {
            target: "OFF",
            actions: ["setValue"]
          }
        }
      },
      OFF: {
        on: {
          TOGGLE: {
            target: "ON",
            actions: ["setValue"]
          }
        }
      }
    }
  },
  {
    actions: {
      setValue: assign({
        isXstateAwesome: (context, event) => {
          console.log(context, event);
          return event.data;
        }
      })
    }
  }
);

export default ToggleMachine;
