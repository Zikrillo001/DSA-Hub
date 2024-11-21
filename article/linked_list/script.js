// Sahifaga xush kelibsiz xabarini chiqarish
// function displayWelcomeMessage() {
//     alert("Welcome to Topic 1: Arrays!");
// }

// Dinamik element qo'shish
function addContent() {
    const contentDiv = document.getElementById("dynamic-content");
    const newElement = document.createElement("p");
    newElement.textContent = "This is dynamically added content for Topic 1.";
    contentDiv.appendChild(newElement);
}

// Sahifa yuklanganda avtomatik ravishda xush kelibsiz xabarini ko'rsatish
window.onload = function() {
    // displayWelcomeMessage();
    addContent();
};
