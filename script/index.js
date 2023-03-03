const btnClose = document.querySelector(".side__menu");
const menuBtn = document.querySelector(".menu__btn");
const btnOpen = document.querySelector(".open__slide");
const scrollElement = document.querySelectorAll(".skill__per");
const list = document.querySelectorAll(".side__menu li");
const navBar = document.querySelector(".navbar");
const checkList = document.querySelectorAll(".check");
let lastScrollY = window.scrollY;

let per;
// navbar list..........................................................
const checkForHightLight = (e) => {
	removeHighLight();
	e.target.classList.add("current");
};

const removeHighLight = () => {
	checkList.forEach((list) => list.classList.remove("current"));
};
checkList.forEach((list) => list.addEventListener("click", checkForHightLight));

// Hamburger button......................................................
function toggle() {
	btnClose.classList.toggle("active");
	menuBtn.classList.toggle("open");
	btnOpen.classList.toggle("active");
}
btnOpen.addEventListener("click", toggle, false);

// Remove side nav........................................................
list.forEach((each) => {
	each.addEventListener("click", () => {
		btnClose.classList.toggle("active");
		menuBtn.classList.toggle("open");
	});
});

//Nav Animation...........................................................
const navAnimation = () => {
	if (lastScrollY < window.scrollY) {
		navBar.classList.add("active");
	} else {
		navBar.classList.remove("active");
	}
	// lastScrollY = window.scrollY;
};

// Progress Bar Starts.....................................................
scrollElement.forEach((el) => {
	per = el.getAttribute("per");
	el.style.width = per;
});

const elementInView = (el) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight)
	);
};
const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop >
		(window.innerHeight || document.documentElement.clientHeight)
	);
};
const displayScrollElement = (element) => {
	element.classList.add("progress");
};
const hideScrollElement = (element) => {
	element.classList.remove("progress");
};
const handleScrollAnimation = () => {
	scrollElement.forEach((el) => {
		if (elementInView(el)) {
			displayScrollElement(el);
		} else if (elementOutofView(el)) {
			hideScrollElement(el);
		}
	});
};
window.addEventListener("scroll", () => {
	handleScrollAnimation();
	navAnimation();
});

// carousel .......................................................
const reviews = document.querySelector(".carousel__box");
const review = document.querySelectorAll(".container");
let index = 0;

function run() {
	index++;
	if (index > review.length - 1) {
		index = 0;
	}
	reviews.style.transform = `translateX(${-index * 410}px )`;
}

setInterval(() => {
	run();
}, 5000);

//....................................................................
