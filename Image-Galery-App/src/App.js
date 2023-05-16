import React from "react";
import Homepage from "./pages/Homepage";
import Picture from "./component/Picture";

import dataa from "./helpers/data";

function App() {
  return (
    <div>
      <Homepage />
      <Picture data={dataa} />
    </div>
  );
}

export default App;
