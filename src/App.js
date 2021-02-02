import "./App.css";

import logo from "./assets/images/logo.png";
import sound from "./assets/toudoum-netflix.mp3";
import Section from "./Section";

function App() {
   return (
      <div className="container">
         <audio src={sound} autoPlay />
         <header>
            <img src={logo} alt="logo" />
            <h1>Toudoummm...</h1>
         </header>
         <main>
            <Section />
         </main>
      </div>
   );
}

export default App;
