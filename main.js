// we need two strings to fetch the data from api
function perform() {
document.getElementById("output").innerHTML="";
var crypto=document.getElementById("crypto").value;
var currency=document.getElementById("currency").value;
const Http = new XMLHttpRequest();
const url='https://api.coingecko.com/api/v3/simple/price?ids='+crypto+'&vs_currencies='+currency;
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  var json=Http.responseText;
  var object=JSON.parse(json);
  if(currency==='inr') {
    var format = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 2
         });
     if(crypto==='bitcoin')        {
        document.getElementById("output").innerHTML=format.format(object.bitcoin.inr);
     }
     else if(crypto==='ethereum')   {
        document.getElementById("output").innerHTML=format.format(object.ethereum.inr);
     }
     else if(crypto==='litecoin')    {
        document.getElementById("output").innerHTML=format.format(object.litecoin.inr);
     }
     else if(crypto==='bitcoin-cash') {
        document.getElementById("output").innerHTML=format.format(object["bitcoin-cash"].inr);
     }
    else if(crypto==='tron')          {
        document.getElementById("output").innerHTML=format.format(object.tron.inr);
     }
     else if(crypto==='ripple') {
       document.getElementById("output").innerHTML=format.format(object.ripple.inr);
     }
  }
  else if(currency==='usd') {
     var format = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
         });
     if(crypto==='bitcoin') {
   document.getElementById("output").innerHTML=format.format(object.bitcoin.usd);
          }
       else if(crypto==='ethereum') {
   document.getElementById("output").innerHTML=format.format(object.ethereum.usd);
          }
       else if(crypto==='litecoin') {
                  document.getElementById("output").innerHTML=format.format(object.litecoin.usd);
           }
       else if(crypto==='bitcoin-cash') {
                document.getElementById("output").innerHTML=format.format(object["bitcoin-cash"].usd);
             }
        else if(crypto==='tron') {
               document.getElementById("output").innerHTML=format.format(object["tron"].usd);
             }
         else if(crypto==='ripple') {
         document.getElementById("output").innerHTML=format.format(object.ripple.usd);
         }
  }
   else if(currency==='eur') {
       var format = new Intl.NumberFormat('en-EU', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
           });
       if(crypto==='bitcoin') {
     document.getElementById("output").innerHTML=format.format(object.bitcoin.eur);
            }
         else if(crypto==='ethereum') {
     document.getElementById("output").innerHTML=format.format(object.ethereum.eur);
            }
         else if(crypto==='litecoin') {
                    document.getElementById("output").innerHTML=format.format(object.litecoin.eur);
             }
           else if(crypto==='bitcoin-cash') {
                  document.getElementById("output").innerHTML=format.format(object["bitcoin-cash"].eur);
               }
            else if(crypto==='tron') {
               document.getElementById("output").innerHTML=format.format(object["tron"].eur);
             }
           else if(crypto==='ripple') {
                  document.getElementById("output").innerHTML=format.format(object.ripple.eur);
              }
    }
}
}