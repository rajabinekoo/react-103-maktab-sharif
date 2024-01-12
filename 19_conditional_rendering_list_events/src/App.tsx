import "./App.css";
import { ContactForm } from "./containers/contact-form";
// import logo from "./logo.svg";
// import { ItemsList2 } from "./containers/items-list";
// import { ConditionalRendering2 } from "./containers/conditional-rendering";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <ConditionalRendering2 enableText={false} /> */}

        {/* <ItemsList2 /> */}

        <ContactForm />
      </header>
    </div>
  );
}

export default App;
