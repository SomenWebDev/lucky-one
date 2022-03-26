import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop />
    </div>
  );
}

export default App;
