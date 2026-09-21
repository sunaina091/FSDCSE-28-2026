<<<<<<< HEAD
const root = document.getElementById("container");
console.log(root);
const btn = document.getElementById("btn");
console.log(btn);

async function getData() {
  const serverdata = await fetch("https://fakestoreapi.com/products");
  const jsondata = await serverdata.json();
  root.innerHTML = `<h style=color:red>${jsondata[0].title}</h>`;
  //   console.log(jsondata[0].title);
}
btn.addEventListener("click", getData);
=======
console.log("hello");

function sum(a, b) {
  return a + b;
}
console.log(sum(20, 30));
function sqr(a, b) {
  return Math.sqrt(a) + Math.sqrt(b);
}
console.log(sqr(16, 25));

var a = 34; //jha tk define h vhi tk work
if (a > 20) {
  var a = 45;
  console.log("a inside" + a);
}
console.log("a outside" + a);

let b = 34;
if (b > 20) {
  let b = 45;
  console.log("a inside" + b);
}
console.log("a outside" + b);

const sum = function sum(a, b) {
  return a + b;
};
console.log(sum(23, 30));

const sum = (a, b) => {
  return Math.sqrt(a + b);
};
console.log(sum(40, 90));

// IIFE
(() => {
  console.log("hii");
})();

// callback function

function sum(a, b) {
  return a + b;
}

function sumwith(clbk, msg) {
  const result = clbk(12, 40);
  console.log("hii" + msg + " " + result);
}
console.log(sumwith(sum, "ram"));

function login(msg, error) {
  if (error) {
    console.log(error);
  } else {
    console.log(msg);
  }
}

function loginHandler(username, password, clbk) {
  // username = "abc";
  // password = "1234";
  if (username == "abc" && password == "1234") {
    Clbk("success", null);
  } else {
    clbk(null, "username or password is inncorect");
  }
}
loginHandler(" abc", "1234", login);

//callback hell
for (let i = 1; i <= 8; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// promise.....

const mypromise = new Promise((resolve, reject) => {
  let username = "sona";
  let pas = "123";
  if (username == "sona" && pas == "123") {
    resolve("success");
  } else {
    reject("invalid");
  }
});
console.log(mypromise);
mypromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(console.log("closed"));

async function orderRecieve() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("one order recieved");
    }, 1000);
  });
}

async function orderprepaer() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order prepared");
    }, 1000);
  });
}

let votp;
function ordercompleted() {
  console.log("order successfully completed");
}
function otp() {
  votp = Math.random() * 10000;
  return votp;
}

async function verifyOTP() {
  return new Promise((resolve, reject) => {
    if (userOTP == generatedOTP) {
      resolve("OTP verified successfully");
    } else {
      reject("Invalid OTP");
    }
  });
}

// OTP verify
async function handlelogin() {
  const status = await mypromise;

  console.log(status);

  if (status == "success") {
    console.log("hello, inside login");

    // Generate OTP
    const generatedOTP = await otp();

    console.log("Your OTP is:", generatedOTP);

    // Verify OTP
    const otpStatus = await verifyOTP(generatedOTP);

    console.log(otpStatus);

    // OTP successful -> order receive
    const order = await orderRecieve();

    console.log(order);

    // Order received -> prepare
    const orderpre = await orderprepaer();
    console.log(orderpre);

    console.log("order successfully completed");
  }
}

handlelogin();
>>>>>>> ea622835d79275968fcff52da891545c0a8a645c
