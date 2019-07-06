const _ = require('lodash')

function delay(ms) {
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve();
    }, ms);
  });
}

async function hasUpperCaseCharacter(str){
  await delay(2000);

  let arr = _.split(str, '');  
  let result = arr.find(function(element){
    return element >= 'A' && element <= 'Z';
  });

  return  result !== undefined; 

}
async function hasNumberCharacter(str){
  await delay(2000);

  let arr = _.split(str, '');  
  let result = arr.find(function(element){
    return element >= '0' && element <= '9';
  });
  return  result !== undefined;
}
async function isLength(str, min, max){
  await delay(2000);
  return str.length <= max && str.length >= min;
}

async function checkPassword_ParallelFlow(str, minLength, maxLength){
 
  let firstTime = Date.now();
  
  let checkLength =  isLength(str, minLength, maxLength);
  let checkUpperCase =  hasUpperCaseCharacter(str);
  let checkNumber =  hasNumberCharacter(str);

  let length     = await checkLength;
  let upperCase  = await checkUpperCase;
  let number     = await checkNumber;

  let secondTime = Date.now();

  console.log(secondTime - firstTime);
  
  return length && upperCase && number;
}

async function checkPassword_SerialFlow(str, minLength, maxLength){
 
  let firstTime = Date.now();
  
  let length    = await isLength(str, minLength, maxLength);
  let upperCase = await hasUpperCaseCharacter(str);
  let number    = await hasNumberCharacter(str);

  let secondTime = Date.now();

  console.log(secondTime - firstTime);
  
  return length && upperCase && number;
}

checkPassword_SerialFlow('lecam16T1', 6, 30)
  .then(result => {
    console.log('Serial Flow');
  });
checkPassword_ParallelFlow('lecam16T1', 6, 30)
  .then(result => {
    console.log('Parallel Flow');
  });
