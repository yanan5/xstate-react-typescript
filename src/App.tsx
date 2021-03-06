import "./styles.css";
import { useMachine } from "@xstate/react";
import ToggleMacine from "./state-machines/toggleMachine";

export default function App() {
  const [machine, send] = useMachine(ToggleMacine);
  console.log(machine.value, machine.context);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="checkbox"
        value="Selected"
        checked={machine.matches("ON")}
        onChange={(e) => send("TOGGLE", { data: e.target.value })}
      />
    </div>
  );
}
