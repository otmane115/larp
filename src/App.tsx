import { useState } from "react";

import Boot from "./pages/Boot/Boot";
import Room from "./pages/Room/Room";
import CRT from "./components/CRT/CRT";

function App() {

  const [bootFinished, setBootFinished] = useState(false);

  return (
    <>
      {bootFinished ? (
        <Room />
      ) : (
        <Boot onFinish={() => setBootFinished(true)} />
      )}

      <CRT />
    </>
  );
}

export default App;