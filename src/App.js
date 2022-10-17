import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const myRef = useRef();
  useEffect(() => {
    const ref = myRef;
    debugger;
  }, []);
  return (
    <div
      ref={(r) => {
        debugger;
        myRef.current = r;
      }}
      className="App"
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
