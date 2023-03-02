import { useRef, useState } from "react";

const DomRef = () => {
  /*
  In a controlled component, form data is handled by a React component. 
  Whereas in uncontrolled components, form data is handled by the DOM itself. 
  
  Usage of Component State is a must for controlled components. 
  Use of state is completely optional for uncontrolled components, 
  but one must use Refs in it.
  */

  const [currentInputValue, setCurrentInputValue] = useState(""); // controlled
  const inputRef = useRef<HTMLInputElement | null>(null); // uncontrolled
  function printValueOfInput() {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  }
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    console.log(event.key);
    if (event.key === "Enter") {
      printValueOfInput();
      console.log(currentInputValue);
    }
  }
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event?.target?.value) {
      setCurrentInputValue(event.target.value);
    }
  }
  return (
    // <form onSubmit={}>
    //   <input type="text" name="username" id="username" />
    //   <input type="password" name="password" id="password" />
    //   <button>Log In</button>
    // </form>
    <input
      type='text'
      placeholder='Name'
      ref={inputRef}
      value={currentInputValue}
      onChange={handleOnChange}
      onKeyDown={handleKeyPress}
    />
  );
};

export default DomRef;
