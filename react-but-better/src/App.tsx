import "./App.css";
import Avatar from "./components/Avatar";
import { ColumnContainer } from "./components/ColumnContainer";
import DomRef from "./components/DomRef";
import EffectsMightSuck from "./components/EffectsMightSuck";
import FetchData from "./components/FetchData";
import { MyCoolButton } from "./components/MyCoolButton";
import VarsStatesRefs from "./components/VarsStatesRefs";

function App() {
  return (
    <>
      <h1>Hello, React</h1>
      <h2>I am excited!</h2>
      <ColumnContainer>
        <MyCoolButton>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
            }}>
            <img
              className='avatar'
              src='https://i.imgur.com/1bX5QH6s.jpg'
              alt='Lin Lanying'
              width='40'
              height='40'
            />
            <span>Lin Lanying</span>
          </div>
        </MyCoolButton>
        <MyCoolButton />
        <MyCoolButton color='dark' />
        <MyCoolButton />
        <MyCoolButton>
          <MyCoolButton color='dark' />
        </MyCoolButton>
        <MyCoolButton />
        <MyCoolButton />
        <MyCoolButton />
        <MyCoolButton className='red' />
        <MyCoolButton />
        <MyCoolButton />
        <MyCoolButton />
      </ColumnContainer>

      <Avatar
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        size={100}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />

      <VarsStatesRefs />
      <DomRef />
      <FetchData />
      <EffectsMightSuck />
    </>
  );
}

export default App;
