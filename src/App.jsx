import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import SubmitButton from "./components/submitButton";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <SubmitButton />
    </div>
  );
}

export default App;
