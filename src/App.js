import { useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  const temp = [1,2,3,4,5]

  return (
    <>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <ChildComponent temp={temp} />
      </div>
    </>
  );
}

export default App;
