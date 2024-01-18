import { useState } from "react";

type inputType = "username" | "password" | "repeatPassword" | "email";

export const useSubmitFormValues = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onChangeInputs = (type: inputType) => {
    switch (type) {
      case "email":
        return (e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value);
      case "password":
        return (e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value);
      case "repeatPassword":
        return (e: React.ChangeEvent<HTMLInputElement>) =>
          setRepeatPassword(e.target.value);
      case "username":
        return (e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value);
    }
  };

  return { email, username, password, repeatPassword, onChangeInputs };
};
