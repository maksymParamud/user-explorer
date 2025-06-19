const input = document.querySelector("#search-user");
const main = document.querySelector("main");

async function renderList() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();

  for (const i of users) {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container"; // стильове ім'я класу

    const userHeader = document.createElement("div");
    userHeader.className = "user-header";
    userHeader.innerHTML = i.name;

    const userMain = document.createElement("div");
    userMain.className = "user-main";
    userMain.innerHTML = `Email: ${i.email}<br>Company: ${i.company.name}`;

    const userFooter = document.createElement("div");
    userFooter.className = "user-footer";
    userFooter.innerHTML = `Phone: ${i.phone}`;

    userContainer.appendChild(userHeader);
    userContainer.appendChild(userMain);
    userContainer.appendChild(userFooter);
    main.appendChild(userContainer);
  }
}

renderList();
