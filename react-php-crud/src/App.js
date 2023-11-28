import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h2>React CRUD Ops using PHP API and mySQL</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">CreateUser</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
