import { useState } from "react";
import { ColumnContainer } from "./ColumnContainer";
import { MyCoolButton } from "./MyCoolButton";

const listOfSayings = ["Hey!", "Ho!", `Let's go!`, "Blitzkrieg bop!"];

const Conditional = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [filterText, setFilterText] = useState("");

  function logic(areWeRendering: boolean) {
    if (areWeRendering) {
      return <h1>On</h1>;
    } else {
      return <h1>Off</h1>;
    }
  }

  return (
    <>
      <h1>Hi conditional rendering</h1>
      <p>{shouldRender ? "Render!" : `Don't render!`}</p>
      {shouldRender ? <h2>Howdee</h2> : <p>Hidey</p>}
      {shouldRender && <h2>Oh my goodness</h2>}
      {logic(shouldRender)}
      <ColumnContainer>
        {shouldRender && (
          <MyCoolButton onClick={() => setShouldRender(false)}>
            Hide it all quick!
          </MyCoolButton>
        )}
        {!shouldRender && (
          <MyCoolButton
            color='dark'
            onClick={() => setShouldRender(true)}>
            Okay, it's safe
          </MyCoolButton>
        )}
        <MyCoolButton
          color={shouldRender ? "light" : "dark"}
          onClick={() => setShouldRender(!shouldRender)}>
          {shouldRender ? "Hide it all quick!" : `Okay, it's safe`}
        </MyCoolButton>

        <input
          type='text'
          name='filter'
          id='filter'
          placeholder='Filter Buttons'
          onChange={(event) => setFilterText(event.target.value)}
          value={filterText}
        />

        {/* {for(let saying of listOfSayings){<MyCoolButton>{saying}</MyCoolButton>}} */}
        {listOfSayings
          .filter((saying) =>
            saying.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((saying) => (
            <MyCoolButton
              key={saying}
              onClick={() => console.log(saying)}>
              {saying}
            </MyCoolButton>
          ))}
        <MyCoolButton>{filterText}</MyCoolButton>
      </ColumnContainer>
    </>
  );
};

export default Conditional;
