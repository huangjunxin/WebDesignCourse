function open() {
	var experiment_file = location.search.substring(1);
	if (experiment_file)
		document.getElementById('experiment_frame').src = "Experiment/" + experiment_file + ".html";
}

window.onload = open;
