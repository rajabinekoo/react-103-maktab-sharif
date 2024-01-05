import Navigo from "navigo";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";

export function render(context: string) {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = context;
}

const router = new Navigo("/");

declare global {
  interface Window {
    navigate: (_: string) => void;
  }
}

window.navigate = (route: string) => {
  router.navigate(route);
};

router.on("signup", function () {
  render(SignupPage());
});

router.on("/", function () {
  render(LoginPage());
});

router.resolve();
