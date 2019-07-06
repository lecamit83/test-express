function delay(ms) {
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve();
    }, ms);
  });
}

async function run(ms){
  await delay(ms);
  return 'Hello World';
}

async function getData() {
  let str = await run(3000);
  console.log(str);
}
getData();
