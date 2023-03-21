import React, { useState } from "react";

import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [theme, setTheme] = useState("light");

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  
  return (
    <div className={`App ${theme}`}>

      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}> {theme} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
