  // Function to toggle visibility of category lists
  function toggleList(id) {
  let list = document.getElementById(id);
  if (list.style.display === "none" || list.style.display === "") {
  list.style.display = "block";
  } else {
  list.style.display = "none";
  }
  }
  
  // Function to add a new favorite item
  function addFavorite() {
  let name = document.getElementById("itemName").value.trim();
  let category = document.getElementById("itemCategory").value.trim().toLowerCase();
  let imageUrl = document.getElementById("itemImage").value.trim();
  
  // Mapping user input category to the correct list ID
  let categoryMap = {
  "food": "foodList",
  "movies": "moviesList",
  "music": "musicList"
  };
  
  if (name === "" || !categoryMap[category]) {
  alert("Please enter a valid favorite thing and choose a category (Food, Movies, Music).");
  return;
  }
  
  let listId = categoryMap[category];
  let list = document.getElementById(listId);
  
  // Create new list item
  let newItem = document.createElement("li");
  newItem.classList.add("animated-item"); // For animation
  
  // Add image if provided
  if (imageUrl !== "") {
  let img = document.createElement("img");
  img.src = imageUrl;
  img.alt = name;
  newItem.appendChild(img);
  }
  
  // Add text content
  let textNode = document.createTextNode(" " + name);
  newItem.appendChild(textNode);
  
  // Append to the correct category list
  list.appendChild(newItem);
  list.style.display = "block"; // Ensure list is visible
  
  // Clear input fields after adding
  document.getElementById("itemName").value = "";
  document.getElementById("itemCategory").value = "";
  document.getElementById("itemImage").value = "";
  }
  
