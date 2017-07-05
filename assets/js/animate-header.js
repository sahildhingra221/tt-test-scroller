$(document).on("scroll", function () {
	if ($(document).scrollTop() > 10) {
		$("header").addClass("small");
	} else {
		$("header").removeClass("small");
	}
});