function addDesign(obj, num) {
	var title = obj["title"];
	var desc = obj["description"];
	var image = obj["image"];
	
	var container = document.getElementById("c"+((num%2)+1));
	var designContainer = document.createElement("div");
	designContainer.className = "design";
	
	var preview = document.createElement("img");
	preview.className = "designPreview";
	preview.src = image;
	
	var titleE = document.createElement("p");
	titleE.className = "designTitle";
	titleE.innerHTML = title;
	
	var descE = document.createElement("p");
	descE.className = "designDescription";
	descE.innerHTML = desc;
	
	var a = document.createElement("a");
	a.href = image;
	a.appendChild(preview);

	designContainer.appendChild(a);
	designContainer.appendChild(titleE);
	designContainer.appendChild(descE);
	
	container.appendChild(designContainer);
}

function getJSON() {
	var r = new XMLHttpRequest();
	r.open("GET","data.json",true);
	r.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.response);
			var i = 0;
			for(key in res) {
				addDesign(res[key],i);
				i++;
			}
			
			var b = document.createElement("p");
			b.className = "content";
			b.innerHTML = "<a id=\"backButton\" href=\"/\">(Back)</a>";
			document.getElementById("container").appendChild(b);
		}
	}
	r.send();
}

window.onload = function() {
	getJSON();
}