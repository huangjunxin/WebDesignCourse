function open() {
	var course_file = location.search.substring(1);
	if (course_file)
		document.getElementById('course_frame').src = "course/" + course_file + ".pdf";
}

window.onload = open;
