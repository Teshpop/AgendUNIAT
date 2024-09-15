import { useState } from "react";
import { AudioRoom, GreenRoom, Hero } from "./components";
import "./components/css/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <GreenRoom />
      <AudioRoom />
    </>
  );
}

export default App;
