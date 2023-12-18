// Get mouse positon on the screen with presentige from center of the screen (0 = center, 1 = edge)
function getMousePosition(event) {
	return {
		x: ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 2,
		y: ((event.clientY - window.innerHeight / 2) / window.innerWidth) * 2,
	};
}

const bgs = document.querySelectorAll(".bg");
const characters = document.querySelectorAll(".char");
const perticles = document.getElementById("particles-js");

document.addEventListener("mousemove", (event) => {
	const { x, y } = getMousePosition(event);
	bgs.forEach((bg) => {
		bg.style.setProperty("--x", -x / 2 - 50 + "%");
		bg.style.setProperty("--y", -y / 2 - 50 + "%");
	});
	characters.forEach((char) => {
		char.style.setProperty("--x", -x * char.dataset.perspectiveX + "%");
		char.style.setProperty("--y", -y * char.dataset.perspectiveY + "%");
	});

	perticles.style.setProperty("--x", -x * 10 + "%");
	perticles.style.setProperty("--y", -y * 10 + "%");
});
