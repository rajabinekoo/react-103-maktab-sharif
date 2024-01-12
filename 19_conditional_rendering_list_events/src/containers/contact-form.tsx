import { useState } from "react";

type props = {
  onChangeUsernameEventHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChangePasswordEventHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};
function ContactFormInputs({
  onChangePasswordEventHandler,
  onChangeUsernameEventHandler,
}: props) {
  return (
    <>
      <div>
        <label>Username:</label>
        <input type="text" onChange={onChangeUsernameEventHandler} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onChange={onChangePasswordEventHandler} />
      </div>
    </>
  );
}

type props2 = { username: string; password: string };
function ContactFormValues({ username, password }: props2) {
  return (
    <>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </>
  );
}

export function ContactForm() {
  // state variables can change (or rerender) this component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsernameEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    console.log("previous username value:", username);
    setUsername(event.target.value);
  };

  const onChangePasswordEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div>
      <ContactFormValues username={username} password={password} />
      {/* binding event handlers as props */}
      <ContactFormInputs
        onChangePasswordEventHandler={onChangePasswordEventHandler}
        onChangeUsernameEventHandler={onChangeUsernameEventHandler}
      />
    </div>
  );
}
