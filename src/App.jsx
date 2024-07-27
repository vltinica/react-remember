
import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header";
import CoreConsepts from "./components/CoreConsept/CoreConsepts";
import Examples from "./components/CoreConsept/Examples";
import { Children } from "react";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConsepts />
        <Examples/>
      </main>
    </div>
  );
}

export default App;
