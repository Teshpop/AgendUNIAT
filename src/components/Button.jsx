import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        la cuenta es de {count}
      </button>
    </>
  );
}

export default Button;
