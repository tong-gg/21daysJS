(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // function simulateAsyncAPI(text, timeout){
  //   setTimeout(() => console.log(text), timeout); //asynchornus function
  // }

  // simulateAsyncAPI("A", 1000);
  // simulateAsyncAPI("B", 500);
  // simulateAsyncAPI("C", 100); 

  // 2. Callback
  // function simulateAsyncAPI(text, timeout, callback){
  //   setTimeout(() => {
  //     console.log(text);
  //     callback();
  //   }, timeout);
  // }

  // //callback hell
  // simulateAsyncAPI("A", 1000, () =>{
  //   simulateAsyncAPI("B", 500, () =>{
  //     simulateAsyncAPI("C", 100, () =>{

  //     })
  //   })
  // });


  // 3. Promise
  function simulateAsyncAPI(text, timeout){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        // if(text === "B") return reject("B is rejected")
        console.log(text)
        resolve() // function already finished return promise
      }, timeout)
    })
  }

  // simulateAsyncAPI("A", 1000)
  // .then(() =>{
  //   return simulateAsyncAPI("B", 500);
  // })
  // .then(() =>{
  //   return simulateAsyncAPI("C", 200);
  // })
  // .catch((error) =>{
  //   console.error(error)
  // })

  // 4. Async/Await
  async function run(){
    try{
      await simulateAsyncAPI("A", 1000)
      await simulateAsyncAPI("B", 500)
      await simulateAsyncAPI("C", 200)
    }catch(error){
      console.error(error);
    }
  }

  run()
})();
