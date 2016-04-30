var quotes = ["Quote one", "Quote two", "Quote three"];
var colors = ["#ADFF2F", "#DC134C", "#483D8B", "#2F4F4F"];
var buttons = ["myButton", "myButton1", "myButton2", "myButton3", "myButton4"];
var intg = 0;
var i = 0;
var curr;
var filtered = [];
$("#myButton").on("click", function() {
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(a) {
		$("#texty").html(a[intg].content + "<p>— " + a[intg].title + "</p>")
		curr = a[intg].content.slice(3, -6) + "\n--" +a[intg].title ;
	});

	intg = (intg + 1) % 29;
	$('body').animate({
		backgroundColor: colors[i]
	}, 'slow');
	$('#texty').css("color", colors[i]);
	$('#myButton').css("background-color", colors[i]);
	$('#twitter').css("background-color", colors[i]);
	i = (i + 1) % 4;
});

var link = 'https:\/\/twitter.com\/intent\/tweet?text=';
$("#twitter").on("click", function() {
	window.open(link + curr, '_blank');
});