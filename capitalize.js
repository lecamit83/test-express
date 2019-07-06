function capitalization(str){

    var arrStr = str.split(' '); 
    var arrRes = [];
    var firstLetter;
    var rest;
    arrStr.forEach(function(s){
        firstLetter = s.charAt(0).toUpperCase();
        rest = s.slice(1).toLowerCase();
        arrRes.push(firstLetter + rest);
        
    });

    var res = arrRes.join(' ');
   
    return res;
}
module.exports = capitalization;