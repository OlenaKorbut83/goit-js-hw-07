const categoryNumbers = document.querySelectorAll("h2");

console.log(`Number of categories : ${categoryNumbers.length}`);

const listCategories = document.querySelectorAll(".item");

listCategories.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const categoryLength = element.querySelectorAll("ul li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements : ${categoryLength}`);
});
