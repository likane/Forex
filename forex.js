$(document).ready(function() {

	var foreignCurrency = "GBP";
    //var 
	var dollarAmount = "10";
	//var apiKey = '';
var currencyList = function(){
    var queryURL = "http://apilayer.net/api/live?access_key=63b481c45a4980b2cffa96ceb07885d5&source=USD&currencies=GBP,AUD,CAD,PLN,MXN&format=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function(response){
            var gbp = response.quotes.USDGBP;
            var aud = response.quotes.USDAUD;
            var cad = response.quotes.USDCAD;
            var mxn = response.quotes.USDMXN;
            var pln = response.quotes.USDPLN;

            //console.log(response);
            console.log("usd / gbp ===" + gbp);
            console.log("usd / aud ===" + aud);
            console.log("usd / cad ===" + cad);
            console.log("usd / mxn ===" + mxn);
            console.log("usd / pln ===" + pln);

            $(".gbpNow").html(gbp + " GBP");
            $(".audNow").html(aud + " AUD");
            $(".cadNow").html(cad + " CAD");
            $(".mxnNow").html(mxn + " MXN");
            $(".plnNow").html(pln + " PLN");
        })

        
}

var conversion = function(){
    var newAmount
}

currencyList();


});//document.ready end