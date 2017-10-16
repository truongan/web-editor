$(document).ready(function(){

	$("#opendialog").bind("click",function(){
		console.log($("#opendialog").val());
		alert($("#opendialog").val());
	});

	$("#open").click(function(){
		$("#opendialog").click();
		
	});
	
});