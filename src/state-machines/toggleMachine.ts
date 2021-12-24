import { createMachine, assign, EventObject } from "xstate";

const ToggleMachine = createMachine(
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
          return (event as EventObject).data;
        }
      })
    }
  }
);

export default ToggleMachine;
