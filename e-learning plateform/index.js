function testimonialSlider(){
	const carouselOne = document.getElementById('carouselOne');

	if(carouselOne){
	    carouselOne.addEventListener("slide.bs.carousel", function(){
			const activeItem = this.querySelector(".active");
			document.querySelector(".js-testimonal-img").src =  activeItem.getAttribute("data-js-testimonial-img");
		})
  
	}
}
testimonialSlider();






function styleSwitcherToggle(){
	const styleSwitcher = document.querySelector(".js-style-switcher"),
	styleSwitcherToggle = document.querySelector(".js-style-switcher-toggler");
	styleSwitcherToggle.addEventListener("click", function(){
		styleSwitcher.classList.toggle("open");
		this.querySelector("i").classList.toggle("ri-settings-5-fill");
		this.querySelector("i").classList.toggle("ri-close-line");


	})
}

styleSwitcherToggle();


function themeColors(){
	const colorStyle = document.querySelector(".js-color-style"),
	themeColorContainer = document.querySelector(".js-theme-colors");

	themeColorContainer.addEventListener("click", ({target}) =>{
		if(target.classList.contains("js-theme-color-item")){
			localStorage.setItem("color",target.getAttribute("data-js-theme-color"));
			setColor();	
		}
	});

	function setColor(){
		let path = colorStyle.getAttribute("href").split("/");
		path = path.slice(0, path.length-1);
		colorStyle.setAttribute("href", path.join("/") + localStorage.getItem("color") + ".css");

		if(document.querySelector(".js-theme-color-item.active")){
			document.querySelector("js-theme-color-item.active").classList.remove("active");
		}
		document.querySelector("[data-js-theme-color = " + localStorage.getItem("color") + "]").classList.add("active");
	}

	if(localStorage.getItem("color") !== null){
		setColor();
	}else{
		const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".");
		document.querySelector("[data-js-theme-color = " + defaultColor + "]").classList.add("active");

		console.log(defaultColor)
	}
}
themeColors();




function themeLightDark(){
	const darkMideCheckBox = document.querySelector(".js-dark-mode");
	darkMideCheckBox.addEventListener("click", function(){
		if(this.checked){
			localStorage.setItem("theme-dark", "true");
		}else{
			localStorage.setItem("theme-dark", "false");

		}
		themeMode();
	})

	function themeMode(){
		if(localStorage.getItem("theme-dark") === "false"){
			document.body.classList.remove("t-dark");
		}else{
			document.body.classList.add("t-dark");
		}
	}

	if(localStorage.getItem("theme-dark") !==null){
		themeMode();
	}
	if(document.body.classList.contains("t-dark")){
		darkMideCheckBox.checked = true;
	}
}
themeLightDark();



const btn = document.querySelector(".btn-show");

btn.addEventListener("click", function(){
	btn.innerText = "Enroll Successfully !!"
	btn1.style.backgroundColor = "rgb(184, 182, 182)";

})

const bnt10 = document.getElementById("btn-10");
const certiname = document.getElementById("certificate-name");
const namehere = document.getElementById("name-here");

bnt10.addEventListener("click", function(){
	namehere.innerHTML = certiname.value;
})