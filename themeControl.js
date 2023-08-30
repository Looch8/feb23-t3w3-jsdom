const themes = {
	light: {
		background: "white",
		text: "black",
	},
	dark: {
		background: "grey",
		text: "blue",
	},
};

function changeCSSTheme(themeName) {
	for (const variable in themes[themeName]) {
		document.documentElement.style.setProperty(
			`--${variable}`,
			themes[themeName][variable]
		);
	}
}

function toggleLightDark() {
	let currentTheme =
		document.documentElement.style.getPropertyValue("--background");
	if (currentTheme === "grey") {
		changeCSSTheme("light");
	} else {
		changeCSSTheme("dark");
	}
}
