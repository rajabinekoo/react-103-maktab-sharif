const Card = () => `<div
class="bg-white hover:bg-violet-500 rounded-r-3xl rounded-b-3xl py-10 px-10 md:px-6 lg:px-10 group relative overflow-hidden"
>
<svg
  width="63"
  height="30"
  viewBox="0 0 63 30"
  class="ff absolute top-0 right-0 fill-violet-500 group-hover:fill-gray-100"
>
  <circle
    cx="7.21563"
    cy="10.1013"
    r="1.14106"
    transform="rotate(-118.771 7.21563 10.1013)"
  ></circle>
  <circle
    cx="24.8191"
    cy="0.43515"
    r="1.14106"
    transform="rotate(-118.771 24.8191 0.43515)"
  ></circle>
  <circle
    cx="16.7716"
    cy="27.5037"
    r="1.14106"
    transform="rotate(-118.771 16.7716 27.5037)"
  ></circle>
  <circle
    cx="2.38256"
    cy="1.2995"
    r="1.14106"
    transform="rotate(-118.771 2.38256 1.2995)"
  ></circle>
  <circle
    cx="25.5737"
    cy="22.6717"
    r="1.14106"
    transform="rotate(-118.771 25.5737 22.6717)"
  ></circle>
  <circle
    cx="34.3754"
    cy="17.8386"
    r="1.14106"
    transform="rotate(-118.771 34.3754 17.8386)"
  ></circle>
  <circle
    cx="43.1771"
    cy="13.0056"
    r="1.14106"
    transform="rotate(-118.771 43.1771 13.0056)"
  ></circle>
  <circle
    cx="51.9788"
    cy="8.17249"
    r="1.14106"
    transform="rotate(-118.771 51.9788 8.17249)"
  ></circle>
  <circle
    cx="60.5805"
    cy="3.44925"
    r="1.14106"
    transform="rotate(-118.771 60.5805 3.44925)"
  ></circle>
  <circle
    cx="11.9389"
    cy="18.7029"
    r="1.14106"
    transform="rotate(-118.771 11.9389 18.7029)"
  ></circle>
  <circle
    cx="20.7405"
    cy="13.8698"
    r="1.14106"
    transform="rotate(-118.771 20.7405 13.8698)"
  ></circle>
  <circle
    cx="29.5423"
    cy="9.0368"
    r="1.14106"
    transform="rotate(-118.771 29.5423 9.0368)"
  ></circle>
  <circle
    cx="38.344"
    cy="4.2038"
    r="1.14106"
    transform="rotate(-118.771 38.344 4.2038)"
  ></circle>
  <circle
    cx="47.1458"
    cy="-0.62915"
    r="1.14106"
    transform="rotate(-118.771 47.1458 -0.62915)"
  ></circle>
</svg>
<p class="font-bold group-hover:text-gray-100">
  Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque
  dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.
</p>
<div class="flex gap-x-3 mt-8 items-center">
  <img
    class="w-12 h-12"
    src="https://app-tailwind.preview.uideck.com/src/images/testimonial/image-3.png"
  />
  <div>
    <p class="text-sm font-bold group-hover:text-gray-100">
      Jonathon Smith
    </p>
    <p
      class="text-xs font-semibold text-gray-400 group-hover:text-gray-300"
    >
      UI/UX Designer
    </p>
  </div>
</div>
</div>`;

function render() {
  const container = document.getElementById("container");

  let html = "";
  for (let index = 0; index < 10; index++) {
    html += Card();
  }

  container.innerHTML = html;
}

render();
