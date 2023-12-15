export const errorHandler = (axiosError) => {
  if (!axiosError.response) console.log(axiosError);
  if (axiosError.response.status === 403) {
    window.location.href = "/login";
    window.sessionStorage.removeItem("token");
  } else if (Array.isArray(axiosError.response.data.message)) {
    let html = "";
    for (const err of axiosError.response.data.message) {
      html += `<p>* ${err}</p>`;
    }
    return html;
  } else if (typeof axiosError.response.data.message === "string") {
    return axiosError.response.data.message;
  } else {
    return "Something went wrong";
  }
};
