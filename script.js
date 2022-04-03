$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();

        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();

        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });

	$(this).children().first().blur(function(){
		$(this).parent().text(conteudoOriginal);
		$(this).parent().removeClass("celulaEmEdicao");
	});
    });
});


let result = 0;
let columns = $("#tablepesquisaprodutos tr")
               .find("td:nth-child(19):contains('true')") 
               .siblings("td:nth-child(" + 8 + ")");

columns.each(i => {
   console.log($(columns[i]).html());
   result += parseFloat($(columns[i]).html().replace(/\./g, '').replace(',', '.'));
});

