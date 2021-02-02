import "./App.css";

import logo from "./assets/images/logo.png";
import Section from "./Section";

function App() {
   return (
      <div className="container">
         <header>
            <img src={logo} alt="logo" />
            <h1>Toudoummm</h1>
         </header>
         <main>
            <Section />
         </main>
      </div>
   );
}

export default App;
