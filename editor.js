function b64EncodeUnicode(str) {
	//this function is shamelessly copied from: https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
$(document).ready(function(){
	var file_name ="";

	$("#opendialog").bind("change",function(e){
		// console.log($("#opendialog").val());
		console.log(this.files);
		
		file_name = this.files[0].name

		if (this.files && this.files[0]){
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#editor').html(e.target.result);
			}

			reader.readAsText(this.files[0]);
		}
	});

	$("#open").click(function(){
		$("#opendialog").click();
		
	});

	$("#save").click(function(){
		$("#save > a").attr("href", "data:text/html;base64," + b64EncodeUnicode( CKEDITOR.instances.editor.getData() )) ;
		$("#save > a").attr("download", file_name) ;
		console.log($("#save > a"));
	});
	
});