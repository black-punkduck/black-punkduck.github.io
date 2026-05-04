import imagedata from '/json/images.json' with { type: 'json' };

function getRandomVector(len) {
	const match = new Array(len);
	let numentries = Object.keys(imagedata).length;
	if (numentries > len) {
		/* stupid method, since javascript has no seed value */
		let x = Date.now() + 100
		while (Date.now() < x) {
			let dummy = Math.random();
		}

		/* avoid identical entries */

		for (let i = 0; i < len;) {
			let n = Math.floor(Math.random() * numentries)
			if (!match.includes(n)) {
				match[i] = n
				i ++;
			}
		}
	} else {
		for (let i = 0; i < len; i++) {
			match[i] = i;
		}
	}
	return match
}

function basename(path) {
	return path.split('/').reverse()[0];
}

function addToContainer(container, value) {
	let itemDiv = document.createElement('div');
	itemDiv.className = "gallery-item";
	let wrapDiv = document.createElement('div');
	wrapDiv.className = "gallery-wrapper";
	let imgLink = document.createElement('a');
	imgLink.href = value.h;
	imgLink.target = "_blank"
	let imgSrc = document.createElement('img');
	imgSrc.src = value.h;
	imgSrc.alt = value.h;
	imgLink.appendChild(imgSrc);

	let galOverlay = document.createElement('div');
	galOverlay.className = "gallery-overlay";
	let galContent = document.createElement('div');
	galContent.className = "gallery-content";

	let galTitle = document.createElement('p');
	galTitle.className = "gallery-title";

	if (typeof value.t != "undefined") {
		galTitle.textContent = basename(value.t);
	} else {
		galTitle.textContent = basename(value.h);
	}
	if (typeof value.a != "undefined") {
		let author = document.createElement('p');
		author.className = "gallery-creator";
		author.textContent = "By: " + value.a;
		galTitle.appendChild(author);
	}
	if (typeof value.c != "undefined") {
		let description = document.createElement('div');
		description.className = "gallery-meta";
		description.textContent = value.c;
		galTitle.appendChild(description);
	}

	galContent.appendChild(galTitle);

	galOverlay.appendChild(galContent);
	imgLink.appendChild(galOverlay);
	wrapDiv.appendChild(imgLink);
	itemDiv.appendChild(wrapDiv);
	container.appendChild(itemDiv);
}

function galleryContainer(container) {
	container.textContent = '';
	let match = getRandomVector(100);
	let cnt = 0;
	for (const [key, value] of Object.entries(imagedata)) {
		if (match.includes(cnt)) {
			addToContainer(container, value)
		}
		cnt += 1;
	}
}

function searchContainer(container, search) {
	container.textContent = '';
	for (const [key, value] of Object.entries(imagedata)) {
		let use = false;
		if (typeof(value.a) != "undefined") {
			if (value.a.toLowerCase().includes(search)) {
				use = true;
			}
		}
		if (typeof(value.t) != "undefined") {
		  	if( value.t.toLowerCase().includes(search)) {
				use = true;
			}
		}
		if (value.h.toLowerCase().includes(search)) {
			use = true;
		}
		if (use == true) {
			addToContainer(container, value);
		}
	}
}

const shuffleContainer = function() {
	const container = document.getElementById('imageGallery');
	galleryContainer(container);
}

const searchFunction = function() {
	const container = document.getElementById('imageGallery');
	const search = document.getElementById('gallerySearch');
	if (search.value != "") {
		searchContainer(container, search.value.toLowerCase());
	}
}

const searchFunctionKey = function() {
	const container = document.getElementById('imageGallery');
	const search = document.getElementById('gallerySearch');
	if (event.key === "Enter") {
		event.preventDefault();
		if (search.value != "") {
			searchContainer(container, search.value.toLowerCase());
		}
	}
}

document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("random-gallery");
	const galcontainer = document.getElementById('imageGallery');
	const randomize = document.getElementById('randomizeBtn');
	const search = document.getElementById('searchBtn');
	const reset = document.getElementById('resetBtn');
	const searchinp = document.getElementById('gallerySearch');

	if (randomize != null) {
		randomize.addEventListener('click',  shuffleContainer, false);
	}
	if (search != null) {
		search.addEventListener('click',  searchFunction, false);
	}
	if (reset != null) {
		reset.addEventListener('click',  shuffleContainer, false);
	}
	if (searchinp != null) {
		searchinp.addEventListener("keypress", searchFunctionKey, false);
	}
	if (container != null) {
		let cnt = 0;
		let match = getRandomVector(6);
        	for (const [key, value] of Object.entries(imagedata)) {
			if (match.includes(cnt)) {
                		let entryDiv = document.createElement('div');
                		entryDiv.style.overflow = "hidden";
                		entryDiv.style.borderRadius = "4px";
                		entryDiv.className = "random-gallery-item";

                		let imgLink = document.createElement('a');
                		imgLink.href = value.h;
                		let imgSrc = document.createElement('img');
                		imgSrc.src = value.h;
                		imgSrc.alt = value.h;
                		imgSrc.className = "gallery-img";
                		imgLink.appendChild(imgSrc);
                		entryDiv.appendChild(imgLink);
                		container.appendChild(entryDiv);
			}
			cnt += 1;
        	}
	} else if (galcontainer != null) {
		galleryContainer(galcontainer);
	}
});


		

	

