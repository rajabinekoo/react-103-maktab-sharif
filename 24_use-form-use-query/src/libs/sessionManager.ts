const sessionKey = "sneaker-store-session";

export const getSessionToken = () => {
  return window.sessionStorage.getItem(sessionKey);
};

export const setSessionToken = (token: string) => {
  window.sessionStorage.setItem(sessionKey, token);
};
