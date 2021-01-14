console.log("Hey Hii");

// $(".nav .nav-link").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).addClass("active");
// });

var activeItem=$(.nav-item);
activeItem.click(function(){
	activeItem.removeClass('active');
	$(this).addClass('active');
})