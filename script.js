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
		targetItemNode.parentNode.removeChild(targetItemNode);
	}
}
