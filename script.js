const input = document.querySelector("#search-user");
const main = document.querySelector("main");

async function renderList() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();

  for (const i of users) {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container"; // стильове ім'я класу

    const userName = document.createElement("div");
    userName.className = "user-header";
    userName.innerHTML = i.name;

    userContainer.appendChild(userName);
    main.appendChild(userContainer);
  }
}

renderList();
