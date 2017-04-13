import React from "react";

import Password from "./Password";

const App = () => {
  return (
    <div>
      <h1>Your diceware password is</h1>

      <Password count="10"/>
    </div>
  )
}

export default App;