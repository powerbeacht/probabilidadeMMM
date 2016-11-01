var input;
var values = [];

$('#calcular').click(function () {
	input = $('input').val().split(",");

	popularValor(input);
	main();
})

function popularValor(input) {
	$.each(input, function (i) {
		values[i] = +input[i];
	})
}

function main() {
	var moda = moda(values);
	var mediana = mediana(values);
	var media = media(values);

	$('#moda').text(moda);
	$('#mediana').text(mediana);
	$('#media').text(media);

	function moda(array){
	    if(array.length == 0)
	    	return null;
	    var modeMap = {};
	    var maxEl = array[0], maxCount = 1;
	    for(var i = 0; i < array.length; i++)
	    {
	    	var el = array[i];
	    	if(modeMap[el] == null)
	    		modeMap[el] = 1;
	    	else
	    		modeMap[el]++;	
	    	if(modeMap[el] > maxCount)
	    	{
	    		maxEl = el;
	    		maxCount = modeMap[el];
	    	}
	    }
	    return maxEl;
	}

	function media(array) {
		var media = 0;
		$.each(array, function (i) {
			media = media + array[i];
		});
		return media / array.length;
	}

	function mediana(array) {
		var posit;
		var mediana;

		array.sort(function (a,b) {return a-b});

		if(array.length % 2 == 0){
			posit = (array.length / 2) - 1;
			mediana = (array[posit] + array[posit + 1]) / 2;
		}else{
			posit = array.length / 2 - 0.5;
			mediana = array[posit];
		}
		return mediana;
	}
}