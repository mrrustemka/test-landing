import Header from "./Components/Header";
import Slogan from "./Components/Slogan";
import Form from "./Components/Form";
import Background from "./Components/Background";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Background />
        <Header />
        <Slogan />
        <Form />
      </div>
    </div>
  );
}

export default App;
