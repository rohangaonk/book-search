import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Search from "./components/Search";
import DisplayBooks from "./components/DisplayBooks";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <Logo />
      <Search setQuery={setQuery} />
      <DisplayBooks query={query} />
    </div>
  );
}

export default App;
