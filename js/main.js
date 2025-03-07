function switchTab(tabElement, tabName, callback) {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((tab) => tab.classList.remove("active"));

	tabElement.classList.add("active");

	if (typeof callback === "function") {
		callback(tabName);
	}
}

function clickHome() {
	console.log("HOME");
	alert("Fitur ini belum dibuka");
}
function clickPortfolio() {
	console.log("Portofolio");
	alert("Fitur ini belum dibuka");
}
function clickBlog() {
	console.log("Gallery");
	window.open("https://rebrand.ly/blueskyzii");
}
function clickProject() {
	console.log("Project");
	alert("Fitur ini belum dibuka");
}
