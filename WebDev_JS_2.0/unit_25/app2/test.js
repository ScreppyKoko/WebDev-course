// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//       foo(this.responseText)
//    }
// };

// xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
// xhttp.send();

// function foo(data) {
//    console.log(data);
// }

const itemList = fetch('https://reqres.in/api/users?per_page=12')
   .then(response => response.json())
   .then(function ({ data }) {
      return data;
   });

itemList.then(data => {
   data.forEach((item) => {
      console.log(data[0])
      console.log(item.email)
   })
})


itemList.then(data => {
   let keys = Object.keys(data[0]);
   keys.find((item) => console.log(item))
})



//! замыкания разбирал 
function wrapFunc(b) {
   let a = 2;  // глобальная переменная
   return () => {
      // let a = 2;  // локальная переменная 
      a++;
      return a * b;
   }
}

let test = wrapFunc(5);
let test2 = wrapFunc(2);

console.log(test() + ' это функция test');
console.log(test2() + ' это функция test2');
console.log(test2() + ' это функция test2');
console.log(test() + ' это функция test');
