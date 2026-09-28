us=document.querySelector(".users");
po=document.querySelector(".posts");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(users => {
      users.forEach((user, index) => {
      const tab = document.createElement('button');
      tab.className = 'tab';
      tab.textContent = user.name;
      tab.addEventListener('click', () => selectUser(user.id, tab));
      us.appendChild(tab);
      if (index === 0) selectUser(user.id, tab); 
    });
  })
async function selectUser(userId, tab) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  po.innerHTML = "";
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  const posts = await response.json();
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    po.appendChild(li);
    });
  } 
