function conversion()
{
    decimal = document.getElementById("decimal");
    binaire = document.getElementById("binaire")
    hexadecimal= document.getElementById("hexadecimal")

    if (decimal.value!='' )
        conversionDecimal()
    else if (binaire.value!='' )
        conversionBinaire()
    else
        conversionHexadecimal()
        
   } 
function conversionDecimal()
{
    hexadecimal.value=(decimal.value-0).toString(16);
    binaire.value=(decimal.value-0).toString(2);
}
function conversionBinaire()
{
    decimal.value=parseInt(binaire.value,2).toString(10);
    hexadecimal.value=parseInt(binaire.value,2).toString(16);
}
    function conversionHexadecimal()
{
    binaire.value=parseInt(hexadecimal.value,16).toString(2);
    decimal.value=parseInt(hexadecimal.value,16).toString(10);
}




