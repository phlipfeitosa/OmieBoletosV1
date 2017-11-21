/**/
var dataSend = '{{"call":"ConsultarBanco","app_key":"1560731700","app_secret":"226dcf372489bb45ceede61bfd98f0f1","param":[{"codigo":1}]}}';

$('#buscar').click(function() {
	$.ajax({
		url:'http://app.omie.com.br/api/v1/geral/bancos/',
		contentType: "application/json; charset=utf-8",
		dataType:'json',
		crossDomain:true,
		type:'POST',
		data:dataSend,
		success:function(data) {
			console.log('BUSCOU COM AJAX');
		},
		error:function(data) {
			console.log(data);
		}
	});
});