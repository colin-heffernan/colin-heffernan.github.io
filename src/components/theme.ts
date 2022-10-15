import { writable } from "svelte/store";

function createTheme() {
	const { subscribe, update } = writable("dark");
	return {
		subscribe,
		toggle: () => update(n => {
			if (n === "dark") return "light";
			else return "dark";
		}),
	};
}

export const theme = createTheme();
