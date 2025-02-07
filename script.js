const users = [
    {
        id: 1,
        name: "Santhosh",
        email: 'santhoshvadthya2002@gmail.com',
        userType: "Admin",
        joined: "20/12/2025",
        status: "Active",
        bgColor: "rgba(255, 99, 132, 0.2)"
    },
    {
        id: 2,
        name: "Angellina Doe",
        email: 'angellinadoe00@gmail.com',
        userType: "Editor",
        joined: "20/12/2025",
        status: "Active",
        bgColor: "rgba(54, 162, 235, 0.2)"
    },
    {
        id: 3,
        name: "Dev rock",
        email: 'devrock02@gmail.com',
        userType: "Admin",
        joined: "02/10/2020",
        status: "Active",
        bgColor: "rgba(255, 206, 86, 0.2)"
    },
    {
        id: 4,
        name: "John Doe",
        email: 'johndoe22@gmail.com',
        userType: "Subscriber",
        joined: "01/2/2015",
        status: "Active",
        bgColor: "rgba(75, 192, 192, 0.2)"
    },
    {
        id: 5,
        name: "Alex",
        email: 'alex002@gmail.com',
        userType: "Admin",
        joined: "02/1/2005",
        status: "Active",
        bgColor: "rgba(255, 159, 64, 0.2)"
    }
]
const userTableBody = document.querySelector("#userTable tbody");
userTableBody.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.userType}</td>
      <td>${user.joined}</td>
      <td>
        <button class="button button-edit" style = "background-color:${user.bgColor}" data-id="${user.status}">${user.status}</button>
      </td>
    `;
    userTableBody.appendChild(row);
  });
