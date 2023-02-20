import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="variantContainer">
          <p>{"<Button />"}</p>
          <Button />
        </div>
        <div className="variantContainer">
          <p>{"&:hover, &:focus"}</p>
          <Button hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button variant=”outline” />"}</p>
          <Button variant="outline" />
        </div>
        <div className="variantContainer">
          <p>{"&:hover, &:focus"}</p>
          <Button variant="outline" hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button variant=”text” />"}</p>
          <Button variant="text" />
        </div>
        <div className="variantContainer">
          <p>{"&:hover, &:focus"}</p>
          <Button variant="text" hover />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button disableShadow />"}</p>
          <Button disableShadow />
        </div>
      </div>

      <div className="row">
        <div className="variantContainer">
          <p>{"<Button disabled />"}</p>
          <Button disabled />
        </div>
        <div className="variantContainer">
          <p>{"&:hover, &:focus"}</p>
          <Button disabled hover />
        </div>
      </div>
    </div>
  );
}

export default App;
