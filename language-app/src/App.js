import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App bg-gradient-to-bl from-amber-300 via-amber-400 to-orange-500 h-[100vh] flex justify-center items-center flex-col">
      <Header />
      <Content />
    </div>
  );
}

export default App;
