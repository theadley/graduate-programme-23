import { useRef, useState } from "react";

function VarsStatesRefs() {
  let localCount = 0; // No re-render, lossy - reset every render
  const [count, setCount] = useState(0); // Causes re-render
  const refCount = useRef(0);
  function incrementCount() {
    localCount++;
    refCount.current = refCount.current + 1;
    setCount(count + 1);
    console.log("Clicked. Current local count:", localCount);
    console.log("Clicked. Current count:", count);
    console.log("Clicked. Current ref count:", refCount.current);
  }
  return <button onClick={incrementCount}>Clicked {count} times</button>;
}

export default VarsStatesRefs;
