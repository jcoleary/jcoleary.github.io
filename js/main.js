$(document).ready(function() {
    // $( '.dropdown' ).hover(function(){
    //         $(this).children('.sub-menu').slideDown(200);
    //         });


	$('#africaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('.afrique').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#asiaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
			}).done(function(content){
			var newp = $(content).filter('.asie').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#australiaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('p');
			var newText = newp.text();
			$('.sample').text(newText);
		});
	});

$('#europeButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('p');
			var newText = newp.text();
			$('.sample').text(newText);
		});
	});

$('#naButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('p');
			var newText = newp.text();
			$('.sample').text(newText);
		});
	});

$('#saButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('p');
			var newText = newp.text();
			$('.sample').text(newText);
		});
	});



})
