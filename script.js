const input = document.querySelector("#search-user");
const main = document.querySelector("main");

let usersData = [];

async function renderList() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();
  usersData = users;

  renderUsers(usersData);
}

function renderUsers(users) {
  main.innerHTML = "";

  if (users.length === 0) {
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = "No users found :(";

    main.classList.add("main-no-users");

    main.appendChild(message);
    return;
  } else {
    main.classList.remove("main-no-users");
  }

  for (const user of users) {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";

    const userHeader = document.createElement("div");
    userHeader.className = "user-header";
    userHeader.innerHTML = user.name;

    const userMain = document.createElement("div");
    userMain.className = "user-main";
    userMain.innerHTML = `Email: ${user.email}<br>Company: ${user.company.name}`;

    const userFooter = document.createElement("div");
    userFooter.className = "user-footer";
    userFooter.innerHTML = `Phone: ${user.phone}`;

    userContainer.appendChild(userHeader);
    userContainer.appendChild(userMain);
    userContainer.appendChild(userFooter);
    main.appendChild(userContainer);
  }
}

function filterUsers() {
  const inputValue = input.value.toLowerCase();
  const filtered = usersData.filter((user) =>
    user.name.toLowerCase().includes(inputValue)
  );

  renderUsers(filtered);
}

renderList();

input.addEventListener("input", filterUsers);
