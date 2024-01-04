var x = 1;
a();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
  b();
}

function b() {
  var x = 100;
  console.log(x);
}
