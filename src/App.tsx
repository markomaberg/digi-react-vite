import { DigiButton } from "@digi/arbetsformedlingen-react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <digi-typography>
        <h1>@digi + Vite + React</h1>
      </digi-typography>
      
      <div className="toggle-buttons">
        <DigiButton 
          afVariation="secondary"
          onAfOnClick={() => console.log('click')}
        >
          Knapp
        </DigiButton>
      </div>
    </div>
  );
}

export default App;
