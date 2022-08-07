// function fetchData(cb) {
//   setTimeout(() => {
//     let data = { pCode: 1001, pName: "Orange" };
//     cb(data);
//   }, 2000);
// }

// console.log("Starts here");
// fetchData(function (data) {
//   console.log(data);
//   console.log("Ends here");
// });

// function cSqr(n, cb) {
//   setTimeout(() => {
//     cb(n * n);
//   }, 2000);
// }
// cSqr(2, function (res) {
//   console.log(res);
//   cSqr(res, function (res1) {
//     console.log(res1);
//   });
// });

// let pr = new Promise((resolve, reject) => {
//   //statements
//   reject("Data Processed");
// });
// console.log(pr);

// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 2000);
// });

// pr.then((msg) => {
//   console.log(msg);
// })
//   .catch((err) => {
//     console.log("Error-" + err);
//   })
//   .finally(() => {
//     console.log("Finishing process");
//   });

// const cSqr = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a * a);
//     }, 2000);
//   });
// };

// cSqr(2)
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// cSqr(2)
//   .then((res) => {
//     console.log("Success-" + res);
//     cSqr(res)
//       .then((res) => {
//         console.log("Success-" + res);
//       })
//       .catch((err) => {
//         console.log("Error-" + err);
//       });
//   })
//   .catch((err) => {
//     console.log("Error-" + err);
//   })
//   .finally(() => {
//     console.log("Finishing process");
//   });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = { pCode: 1001, pName: "Orange" };
//       resolve(data);
//     }, 2000);
//   });
// }

// console.log("Program starts here...");
// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Program ends here...");
//   });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3");
  }, 1000);
});

Promise.race([p1, p2, p3])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log("Error " + err);
  });
