//check off specific to dos by clicking
$("ul").on("click","li",function(){
	//if li grey turn black, else turn back
	$(this).toggleClass("completed");
})


//click on x to delete To Do
$("ul").on("click", "span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(e.which ===13){
		//grabs text input
		var todoText = $(this).val();
		//clears text input
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>");
		}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
