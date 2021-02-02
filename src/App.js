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
         <footer>
            <span>
               2021 © Made with&nbsp;<strong>React.js</strong>&nbsp;at&nbsp;
               <strong>Le Reacteur</strong>&nbsp;by&nbsp;
               <a href="https://teddy-beau.com/">Teddy Beau</a>.
            </span>
         </footer>
      </div>
   );
}

export default App;
