import { AxiosError } from "axios";
import { ISignupBody, signupApi } from "../../apis/auth-apis";
import { render } from "../../router";
import { ErrorToast } from "../../components/toast/error-toast";

declare global {
  interface Window {
    handleSignup: () => Promise<void>;
    signupNotificationClose: () => void;
  }
}

window.handleSignup = async () => {
  const usernameInput = <HTMLInputElement>(
    document.getElementById("signup-form-username")
  );
  const passwordInput = <HTMLInputElement>(
    document.getElementById("signup-form-password")
  );

  const body: ISignupBody = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  try {
    await signupApi(body);
  } catch (error) {
    const err = <AxiosError>error;
    console.log(err.response?.data);
    render(
      SignupPage(
        ErrorToast({
          errorsList: (<any>err.response?.data).message || [],
          closeFunctionName: "signupNotificationClose",
        })
      )
    );
  }
};

window.signupNotificationClose = () => {
  render(SignupPage());
};

export const SignupPage = (notifElement?: string) => {
  return `
    ${notifElement || ""}
    <div class="w-full h-full flex flex-wrap justify-center">
        <div class="flex flex-col justify-center items-center gap-y-4 pt-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="81"
            viewBox="0 0 54 81"
            fill="none"
          >
            <path
              d="M9.23355 17.7415C22.2531 10.4389 33.6453 3.542 39.7482 0.499261C44.834 -2.54348 47.1042 9.00132 42.7997 16.7273C38.4952 24.4532 26.5252 28.8982 26.5252 28.8982C26.5252 28.8982 52.9712 22.8128 53.9884 46.1404C54.2537 52.2259 49.9198 59.3256 46.8683 61.3541C43.8168 63.3826 17.3708 79.1034 14.3194 80.6248C10.7425 82.4081 9.23359 77.582 9.23359 71.4965C9.23359 57.2971 25.5081 52.2259 25.5081 52.2259C11.2679 54.2544 2.1135 49.1832 0.0791923 33.9695C-0.598903 28.8982 3.13068 21.1646 9.23355 17.7415Z"
              fill="black"
            />
          </svg>
          <p class="font-medium text-3xl w-full mt-20 mb-6">Signup to Your Account</p>
  
          <div class="relative mt-2 rounded-md shadow-sm w-full">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
                />
                <path
                  d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
                />
              </svg>
            </div>
            <input
              id="signup-form-username"
              type="text"
              name="username"
              class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-50 bg-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Username"
            />
          </div>
  
          <div class="relative mt-2 rounded-md shadow-sm w-full">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              id="signup-form-password"
              type="password"
              name="password"
              class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-50 bg-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
            />
          </div>
  
          <button onclick="navigate('/')">Login</button>
        </div>
  
        <div class="self-end w-full pb-8">
          <button class="bg-black text-white w-full py-2 rounded-3xl" onclick="handleSignup()">
            <p class="text-sm font-medium">Sign Up</p>
          </button>
        </div>
      </div>
      `;
};
