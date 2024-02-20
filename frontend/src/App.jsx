import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NotesListPage />
    </>
  );
}

export default App;
