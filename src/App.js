import "./App.css";
import { useActive } from "./hooks/useActive";

function App() {
  const active = useActive(5000);
  return (
    <div className="App">
      <div className="childClass">
        {active ? "User is active" : "User is inactive"}
      </div>
    </div>
  );
}

export default App;
