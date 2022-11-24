export function delay() {
	new Promise((resolve) => setTimeout(resolve, 4000));
}
