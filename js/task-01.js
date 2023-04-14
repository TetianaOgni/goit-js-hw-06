const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const interItems = item.querySelectorAll("li");
  console.log(`Elements: ${interItems.length}`);
});
