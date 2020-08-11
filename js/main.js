(() => {
	console.log("Running");

var mainTitle = document.createElement('p'),
	name = document.querySelector("#name");
	mainTitle.textContent = 'Son Main';
	mainTitle.setAttribute("id", "sontaTitle");

var pic = document.querySelector("#photo1");


var Text = [" My name is Son Kim Ta, i'm from Vietnam. My design style is simple but not trivial. I'm a pretty funny person, but not active so much. I'm interested in Anime, Video Games and Watching Soccer. "],
	bio = document.querySelector("#bio");
	

function changeName() {
	
	if (name.hasChildNodes(document.getElementById("name"))) {
		name.textContent = '';
		name.appendChild(mainTitle);
	} 
	
}

function changePhoto() {
	pic.src = "images/son_ta.jpg";
}

function changeBio() {
	bio.innerHTML = '';
	bio.innerHTML += Text;
}


document.getElementById("revealButton").addEventListener("click", changeName);
document.getElementById("revealButton").addEventListener("click", changePhoto);
document.getElementById("revealButton").addEventListener("click", changeBio);


})();
