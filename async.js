console.log("eren");

let request = new XMLHttpRequest();
request.open("get", "https://restcountries.com/v3.1/name/india");
request.send();

request.onload = function () {
  console.log(JSON.parse(request.responseText)[0].name.common);
};

fetch("https://restcountries.com/v3.1/name/india")
  .then((data) => data.json())
  .then((realDAta) => console.log(realDAta[0]));

var x = async function () {
  let req = await fetch("https://restcountries.com/v3.1/name/india");
  let data = await req.json();
  console.log(data[0].name.common);
};
x();
var x = 3;

var y = new Promise(function (res, rej) {
  if (x > 2) {
    res("eren");
  } else {
    rej("some");
  }
});

y.then((data) => console.log(data)).catch((err) => console.log(err));

Promise.resolve("eren").then((data) => console.log(data));
Promise.reject("griah").catch((err) => {
  console.log(err);
});

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

Promise.resolve("eren").then((value) => console.log(value));
Promise.reject("grisha").catch((errr) => console.log(errr));

let x = new Promise((res, rej) => {
  res("nitthamunena");
});

x.then((data) => {
  console.log(data);
});

var y = new XMLHttpRequest();
y.open("get", "url");
