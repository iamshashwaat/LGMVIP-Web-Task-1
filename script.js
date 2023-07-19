const input = document.getElementById('input');
const list = document.getElementById('container');

function storeData(){
	localStorage.setItem("list",list.innerHTML);
}


list.addEventListener("click",function(i){
	if(i.target.tagName==="LI"){
		i.target.classList.toggle("checked");
		storeData();
	}
	else if(i.target.tagName==="SPAN"){
		i.target.parentElement.remove();
		storeData();
	}
},false);

function getList() {
	list.innerHTML = localStorage.getItem('list');
}

function addTask(){
	if(input.value === ''){
		alert("Please type the task First!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = input.value;
		list.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	input.value = "";
	storeData();
}

getList();