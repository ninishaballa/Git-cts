function con() {
  var src = document.querySelector("#in");
  var tar = document.querySelector("#out");
  var currin = document.querySelector("#Currencyout");
  var curout = document.querySelector("#Currencyin");

  var currency={
  USD: {CAD:1.3443563815, INR:72.228295527, JPY:108.7364489387},
INR: {CAD:0.0186126001, JPY:1.5054550041, USD:0.0138449896},
CAD: {CAD:1.0, INR:53.7270447923, USD:0.7438503761},
JPY: {CAD:0.0123634383, INR:0.6642510054, USD:0.0091965483}
  }

  function convertCurrency(event) {
    event.preventDefault();
    var currin = amountInput.value;
    var src = baseCurrencyInput.value;
    var tar = secondCurrencyInput.value;
    var result = 0;
    
    try{
      if (from == to){
        result = amount;
      } else {
       result = amount * crrncy[from][to];
    }
    }
    catch(err) {
      result = amount * (1 / crrncy[to][from]);
    }
    
    toShowAmount.innerHTML = amount;
}
