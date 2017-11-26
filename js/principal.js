/**/
var results = [{"page":"1", "numero":"1234567890", "nome":"Victor", "datadocumento":"23/11/2019", "valor":"R$ 1.567,83"},
{"page":"1", "numero":"98765432", "nome":"Mara", "datadocumento":"15/10/2019", "valor":"R$ 1.567,83"},
{"page":"1", "numero":"1234567890", "nome":"Victor", "datadocumento":"23/11/2019", "valor":"R$ 1.567,83"},
{"page":"1", "numero":"98765432", "nome":"Mara", "datadocumento":"15/10/2019", "valor":"R$ 1.567,83"},
{"page":"1", "numero":"1234567890", "nome":"Victor", "datadocumento":"23/11/2019", "valor":"R$ 1.567,83"},
{"page":"2", "numero":"98765432", "nome":"Mara página 2", "datadocumento":"15/10/2019", "valor":"R$ 1.567,83"}];

var dataSend = '{{"call":"ConsultarBanco","app_key":"1560731700","app_secret":"226dcf372489bb45ceede61bfd98f0f1","param":[{"codigo":1}]}}';

// Monta os resultados na tabela
$.each(results, function() { // Linhas
	var numero = '';
	var nome = '';
	var datadocumento = '';
	var valor = '';
	$.each(this, function(field, value) { // Colunas
		if(field == 'numero')
			numero = value;

		else if(field == 'nome')
			nome = value;

		else if(field == 'datadocumento')
			datadocumento = value;

		else if(field == 'valor')
			valor = value;

	});

	$('#results-table').append('<tr>'  +
		'<th scope="row" style="width: 10%;">' +
		'<label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">' +
		'<input type="checkbox" class="custom-control-input"/>' +
		'<span class="custom-control-indicator"></span>' +
		'</label>' +
		'</th>' +
		'<td style="width: 10%;">' +
		'<a href="#" data-toggle="modal" data-target="#boleto-modal">' + numero + '</a>' +
		'</td>' +
		'<td style="width: 50%;">' + nome + ' (adicionado pelo JQuery)</td>' +
		'<td style="width: 15%;">' + datadocumento + '</td>' +
		'<td style="width: 15%;">' + valor + '</td>' +
		'</tr>');

});

//
$('#buscar').click(function() {
/*
	$.ajax({
		url:'http://app.omie.com.br/api/v1/financas/boleto/',
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
*/

});

$('#testar').click(function() {
	$('.pagina1').hide();
	console.log($('#testar').html());
});