import ButtonPage from "./components/ButtonPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <h1>Buttons</h1>
        <ButtonPage />
      </div>
    </div>
  );
}

export default App;
