const completed = document.getElementById("completedListBody");
const inprogress = document.getElementById("inprogressListBody");

const showDescriptionHander = (ev) => {
  if (!ev.target.dataset.desc) return;
  const hide = document
    .getElementById(ev.target.dataset.desc)
    .classList.contains("hidden");
  ev.target.innerText = !hide ? "Show description ..." : "Hide description ...";
  if (hide) {
    document.getElementById(ev.target.dataset.desc).classList.remove("hidden");
  } else {
    document.getElementById(ev.target.dataset.desc).classList.add("hidden");
  }
};

completed.addEventListener("click", showDescriptionHander);
inprogress.addEventListener("click", showDescriptionHander);

export function TaskCard({ title, description, id }, isCompletedTask = false) {
  return `
    <div
      class="grid grid-cols-1 gap-y-3 w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
        <span class="text-md font-medium text-gray-900 dark:text-white">
          ${title}
        </span>
        <div
          class="text-sm text-gray-900 dark:text-white inline-flex gap-x-2 items-center"
        >
          <load ="/components/icons/calender.html" />
          <span class="text-gray-600">Last Thursday at 6:30 PM</span>
        </div>
        <div class="grid grid-cols-2">
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Remove
          </button>
          <button
            type="button"
            class="${
              isCompletedTask ? "hidden" : ""
            } focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Done
          </button>
          <button
            type="button"
            class="${
              !isCompletedTask ? "hidden" : ""
            } focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Undone
          </button>
        </div>
        <div>
          <p data-desc="task-desc-${id}" class="text-gray-500 text-sm hover:underline cursor-pointer">
            Show description ...
          </p>
          <p class="text-gray-500 hidden mt-4" id="task-desc-${id}">
            ${description}
          </p>
        </div>
    </div>
  `;
}
