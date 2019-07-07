const _ = require('lodash');
const TIME_DELAY = 10;
function isMatchLength(str){
  return new Promise(function(resolve , reject){
    setTimeout(() => {
      let result = 6 < str.length && str.length < 30;
      resolve(result);
    }, TIME_DELAY);
  });
}


function hasCapitalizeLetter(str) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      let arr = _.split(str, '');
      let result = arr.find(function(element){
        return (element <= 'Z' && element >= 'A');
      });
      resolve(result);
    }, TIME_DELAY);
  });
}

function hasNumberLetter(str) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      let arr = _.split(str, '');
      let result = arr.find(function(element){
        return (element <= '9' && element >= '0');
      });
      resolve(result);
    }, TIME_DELAY);
  });
}

async function checkPassword_Parallel_Flow(str) {

  let checkLength = isMatchLength(str);
  let checkCapitalize = hasCapitalizeLetter(str);
  let checkNumber = hasNumberLetter(str);


  let isMatch = await checkLength && await checkCapitalize && await checkNumber;

  return Boolean(isMatch);
}

async function checkPassword_Serial_Flow(str) {
  let firstTime = Date.now();

  let checkLength = await isMatchLength(str);
  let checkCapitalize = await hasCapitalizeLetter(str);
  let checkNumber = await hasNumberLetter(str);

  let isMatch = checkLength && checkCapitalize && checkNumber;

  let secondTime = Date.now();
  console.log(secondTime - firstTime);
  return isMatch;
}

checkPassword_Parallel_Flow('ASDSSSSSSSSS21').then(res=>console.log(res));

module.exports = checkPassword_Parallel_Flow;


