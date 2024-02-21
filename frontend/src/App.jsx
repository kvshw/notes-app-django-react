import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NotesListPage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
