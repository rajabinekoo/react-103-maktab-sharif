import { AppLogo } from "./components/AppLogo";

// pure css
import "./App.css";
import { Paragraph } from "./components/Paragraph";

// css module (import classname objects)
// import styles from "./app.module.css"

// sass module (import classname objects) - needs yarn add -D sass
// import styles from "./app.module.scss"

// css in js
// import { appLogoContainerStyle } from "./App-styles";

// tailwind
// https://tailwindcss.com/docs/guides/create-react-app

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={appLogoContainerStyle}>
          <AppLogo />
        </div> */}
        {/* <div className={styles.appLogoContainer}>
          <AppLogo />
        </div> */}
        <AppLogoContainer display="flex">
          <AppLogo maktab={103} />
        </AppLogoContainer>

        <Paragraph title1="test 1">
          <p>para</p>
        </Paragraph>
      </header>
      {/* {AppLogo()} */}
      {/* {[<p>1</p>, <p>2</p>]} */}
    </div>
  );
}

function AppLogoContainer(props) {
  return (
    <div className={props.display + " items-center"}>{props.children}</div>
  );
}
