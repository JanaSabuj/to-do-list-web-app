 alert("hello");

 $("ul").on("click","li",function() {
	$(this).toggleClass("completed");
 
});

 $("ul").on("click","span",function(event){
 	
 	$(this).parent().fadeOut(500,function() {
 		$(this).remove();
 	});
event.stopPropagation();
 });

$("input").keypress(function(event){
	if(event.which == 13) {
		var txt= $(this).val();
		$(this).val("");
		 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ txt + "</li>");
	}
 

});


$(".fa-plus-circle").click(function() {

$("input").fadeToggle();

});
