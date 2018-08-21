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



