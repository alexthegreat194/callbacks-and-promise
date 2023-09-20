// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// it returns whatever is in the reject function

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// the first one to be called is the one that is executed

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// yes, the first one to be called is the one that is executed

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// whatever is in the first resolve or reject is what is executed