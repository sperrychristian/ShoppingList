// Name: Christian Sperry
// Description: The purpose of this program is to allow users to create a shopping list.

// function to add an item
function createItem() {
  let item_name = document.querySelector("#shopping-form>input").value; // grabs the value in shopping form input
  let template = document.querySelector("template"); // grabs the template alraedy established in html
  let new_item = document.importNode(template.content, true); // Imports the content of the template
  new_item.querySelector(".item-text").innerText = item_name; // fills the inner text value of the template with the text we captured from the user in item name
  new_item.querySelector(".remove-btn").addEventListener("click", removeItem); // calls the removeItem function when the user clicks the remove button
  new_item.querySelector("li").addEventListener("click", removeItem);
  document.querySelector("#shopping-list").appendChild(new_item); // adds the text to the page
  document.querySelector("#shopping-form>input").value = ""; // clears the input after we add something to the shopping list
}

// function to remove item triggered by both event listeners in our createItem function
function removeItem(e) {
  if (
    e.target.getAttribute("class") === "remove-btn" &&
    e.currentTarget.getAttribute("class") != "remove-btn"
  ) {
    e.currentTarget.remove();
  }
}

document
  .querySelector("#shopping-form>button")
  .addEventListener("click", createItem);
