import AppCSS from "./styles/App.module.css";
import Card from "./components/Card";

function App() {
  return (
    <div className={AppCSS.App}>
      <h1>TODO</h1>
      <Card />
    </div>
  );
}

export default App;
