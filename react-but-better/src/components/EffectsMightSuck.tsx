import { useEffect, useState } from "react";

const EffectsMightSuck = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`The value of count is: ${count}`);
    // setCount(count + 1); // Infinite loop bad
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>Increment count</button>;
};

export default EffectsMightSuck;
