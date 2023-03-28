const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("mouseover", (event) => {
	const xC = event.pageX - buttonEl.offsetLeft;
	const yC = event.pageY - buttonEl.offsetTop;
	buttonEl.style.setProperty("--xC", xC / 10 + "rem");
	buttonEl.style.setProperty("--yC", yC / 10 + "rem");
});
