// import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
// const useStyles = createUseStyles({
//   myLabel: {
//     color: "blue",
//     "&:hover": {
//       color: "green",
//     },
//   },
// });

// functional component
export function AppLogo(props) {
  // const classes = useStyles();

  return (
    <>
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <p>Matakb React {props.maktab}</p>
      
      {/* jss style */}
      {/* <p className={classes.myLabel}>Matakb React {100 + 3}</p> */}
    </>
  );
}
