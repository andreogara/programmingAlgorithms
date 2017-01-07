//"Jeff spent $5.25 on MP3s this week"
//Output: "Jeff spent $4.89 on MP3s this week"

//"Jeff spent €5,25 on MP3s this week"

//find a string that starts with dollar or pounds and return up until the next char after the first non-number char is not a number

var string = "Jeff spent $5,254,345.9045 on MP3s this week and spent €55.45 on condoms this month";
var map = {
    "$": true,
    "€": true
}
function stripCurrency(str){
    var array = str.split(" ");
    var re = /[^\d .]/g;
    var newArray;
    newArray = array.map(function(val){
        if(map[val.charAt(0)]){
            var currency = val.charAt(0);
            val = val.replace(re, "");
            val = parseFloat(val);
            val = (val/100 * 15).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
            val.replace()
            return currency+val;
        }
        else{
            return val;
        }
    });
return newArray.join(" ");
}

console.log(stripCurrency(string));