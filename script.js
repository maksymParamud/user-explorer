const input = document.querySelector("#search-user");
const userContainer = document.querySelector(".user-container");

async function renderList() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();

  for (const i of users) {
    const userName = document.createElement("div");
    userName.className = "user-header";
    userName.innerHTML = i.name;
    userContainer.appendChild(userName);
  }
}

renderList();
