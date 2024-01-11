import "./App.css";
import { AppLogo } from "./components/AppLogo";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <AppLogo />
        </div>
      </header>
      {/* {AppLogo()} */}
      {/* {[<p>1</p>, <p>2</p>]} */}
    </div>
  );
}
