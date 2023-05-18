import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { routers } from "./Router";
function App() {
  const [init, setInit] = useState(true);
  return <>{init ? <RouterProvider router={routers} /> : "loading"}</>;
}

export default App;
