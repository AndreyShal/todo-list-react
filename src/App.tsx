import React, { useEffect, useState } from "react";
import "./styles/index.scss";
import Tasks from "./components/Tascs";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <CreateTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;

// npx json-server --watch db.json --port 8080
