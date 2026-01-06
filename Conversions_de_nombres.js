function conversion()
{
    decimal = document.getElementById("decimal");
    binaire = document.getElementById("bt")
    hexadecimal= document.getElementById("hexadecimal")
    decimal.value= decimal
    binaire.value= binaire
    hexadecimal.value= hexadecimal
    if (decimal.value!='' )
        conversionDecimal(decimal.value)
    else if (binaire.value!='' )
        conversionBinaire(binaire.value)
    else
        conversionHexadecimal(hexadecimal.value)
        
    
function conversionDecimal()
{
    hexadecimal.value=(decimal.value-0).toString(16)
    binaire.value=(decimal.value-0).toString(2)
}
function conversionBinaire()
{
    decimal.value=parseInt(binaire.value,2)
    hexadecimal.value=parseInt(binaire.value,2)
}
    function conversionHexadecimal()
{
    binaire.value=parseInt(hexadecimal.value,10)
    decimal.value=(hexadecimal.value-0).toString(10)
}




