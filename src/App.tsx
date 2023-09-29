import { DigiExpandableAccordion, DigiLayoutBlock, DigiTypography, DigiTypographyHeadingJumbo } from "@digi/arbetsformedlingen-react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <DigiTypography>
        <DigiLayoutBlock>
          <DigiTypographyHeadingJumbo afText="Digi + React + Vite" />
          <DigiExpandableAccordion afHeading="Information">
            <p>This is a repository running Digi components in React with Vite</p>
          </DigiExpandableAccordion>
        </DigiLayoutBlock>
      </DigiTypography>
    </div>
  );
}

export default App;
