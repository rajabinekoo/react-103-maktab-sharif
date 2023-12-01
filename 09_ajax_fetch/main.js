$(function () {
  const getAllUsers = () => {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
        if (error.status === 404) {
          alert("User not found");
        }
      },
    });
  };
  // getAllUsers();

  const getSpecificUser = (id) => {
    $.ajax({
      type: "GET",
      url: `https://reqres.in/api/users/${id}`,
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
        if (error.status === 404) {
          alert("User not found");
        }
      },
    });
  };
  // getSpecificUser(1);

  const createUser = (body) => {
    $.ajax({
      type: "POST",
      url: `https://reqres.in/api/users`,
      data: JSON.stringify(body),
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
        if (error.status === 404) {
          alert("User not found");
        }
      },
    });
  };
  // createUser({ name: "ali", job: "software engineer" });

  const updateUser = (id, body) => {
    $.ajax({
      type: "PUT",
      url: `https://reqres.in/api/users/${id}`,
      data: JSON.stringify(body),
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
        if (error.status === 404) {
          alert("User not found");
        }
      },
    });
  };
  // updateUser(1, { name: "ali", job: "software engineer" });

  const deleteUser = (id) => {
    $.ajax({
      type: "DELETE",
      url: `https://reqres.in/api/users/${id}`,
      success: function () {
        alert("Deleted");
      },
      error: function (error) {
        console.log(error);
        if (error.status === 404) {
          alert("User not found");
        }
      },
    });
  };
  // deleteUser(1);
});
