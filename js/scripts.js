function taskCreate() {

	var taskVal = document.getElementById("comment").value;
	var pointVal = document.getElementById("ex3").value;
	var regExp = /^0[0-9].*$/;	

	var pointCheck = regExp.test(pointVal);

	console.log(pointCheck);
	
	if (isNaN(pointVal) || pointVal <= 0 || pointCheck == true || taskVal == "") {

			document.getElementById("ex3").value = "0";
			alert ("please fix your task");
	}
		else {
			document.getElementById("currentTasks").innerHTML = taskVal;
			document.getElementById("taskPoints").innerHTML = pointVal;
		}
}


function taskFinish(){

	var currentPoints = document.getElementById("displayPoints").innerHTML;
	var newPoints = document.getElementById("taskPoints").innerHTML;


	var addPoints = parseFloat(currentPoints) + parseFloat(newPoints);

	var recordTask = document.getElementById("currentTasks").innerHTML;

	var setTask = document.getElementById("taskHistory");
	var setNewTask = document.createElement("LI");


	var setPoints = document.getElementById("pointsHistory");
	var setNewPoints = document.createElement("LI");


	var getFinished = document.getElementById("displayFinished").innerHTML;
	getFinished++;


	var addBreak = document.createElement("br");
	var addHr = document.createElement("hr");


	setNewTask.classList.add("list-group-item");
	setNewTask.appendChild(document.createTextNode(recordTask));
	setNewTask.appendChild(addBreak);
	setNewTask.appendChild(addHr);
	setNewTask.appendChild(document.createTextNode("Points Gained: +"));
	setNewTask.appendChild(document.createTextNode(newPoints));
	 setTask.prepend(setNewTask);	




/**
	 setNewPoints.classList.add("list-group-item");
	 setPoints.appendChild(setNewPoints);
**/


	 document.getElementById("displayFinished").innerHTML = getFinished;

	document.getElementById("displayPoints").innerHTML = addPoints;


	document.getElementById("ex3").value = "0";
	document.getElementById("comment").value = "";


}





