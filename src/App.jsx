import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchProvider from "./components/SearchProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchProvider />
    </>
  );
}

export default App;
