import React, { useState } from "react";
import Search from "./components/search";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h2>Find <span className="text-gradient">Movies</span> you will Enjoy</h2>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </header>
      </div>
    </main>
  )
}

export default App