let favouriteMedia = [
	"pokemon",
	"digimon",
	"supernatural",
	"sherlock",
	"doctor who",
	"parks and recreation",
	"marvel",
	"harry potter",
	"barbie",
	"yu-gi-oh",
	"oppenheimer",
	"dragonball z",
];

function exampleHello() {
	console.log("Hello World!");
}

function createListOfMedia() {
	let rootUlNode = document.querySelector("ul");

	rootUlNode.innerHTML = "";

	favouriteMedia.forEach((mediaItem) => {
		// Create an element but do not display it yet
		let newListItem = document.createElement("li");

		// Assign some text to the element
		newListItem.textContent = mediaItem;
		newListItem.id = mediaItem;

		// Create a button to remove item later
		let removeItemButton = document.createElement("button");

		removeItemButton.onclick = () => removeItemFromList(mediaItem);

		removeItemButton.textContent = "Remove item";

		// add the button to the list item
		newListItem.appendChild(removeItemButton);

		// Add the element to the visible page
		rootUlNode.appendChild(newListItem);
	});
}

function removeItemFromList(targetItem) {
	let targetItemNode = document.getElementById(targetItem);
	if (targetItemNode) {
		//targetItemNode.parentNode.removeChild(targetItemNode);

		// Modify the array
		favouriteMedia = favouriteMedia.filter((item) => {
			if (!item || item == "" || item !== targetItem) {
				return true;
			} else {
				return false;
			}
		});

		// Regenerate the visuals
		createListOfMedia();
	}
}

function addItemToList(event) {
	event.preventDefault();
	console.log("we tried to add an item to the list!");

	let realInputField = document.getElementById("real-nameinput");
	let newItemName = realInputField.value;
	if (newItemName) {
		console.log("newItemName is: " + newItemName);
		// add item to list
		favouriteMedia.push(newItemName);

		// generate a new list
		createListOfMedia();
	} else {
		console.warn("Attempted to add an empty item to the list");
	}
}

let realFormSubmitButton = document.getElementById("real-formsubmit");
realFormSubmitButton.addEventListener("click", addItemToList);

function inputHelperOnFocus(targetId) {
	let helperElement = document.getElementById(targetId);
	console.log("showing text hint now");
	helperElement.style.display = "inherit";
}

function inputHelperOnBlur(targetId) {
	let helperElement = document.getElementById(targetId);
	console.log("hide text hint now");
	helperElement.style.display = "none";
}

let realFormTextInput = document.getElementById("real-nameinput");
realFormTextInput.addEventListener("focusin", () => {
	inputHelperOnFocus("real-texthint");
});
realFormTextInput.addEventListener("focusout", () => {
	inputHelperOnBlur("real-texthint");
});
inputHelperOnBlur("real-texthint");

let pseudoFormTextInput = document.getElementById("pseudo-nameinput");
pseudoFormTextInput.addEventListener("focusin", () => {
	inputHelperOnFocus("pseudo-texthint");
});
pseudoFormTextInput.addEventListener("focusout", () => {
	inputHelperOnBlur("pseudo-texthint");
});
inputHelperOnBlur("pseudo-texthint");
