
let a = new Promise ((resolve, reject ) => { 
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=8')
    .then(data => {
        resolve(data.text())
    })
})

let b = new Promise ((resolve, reject ) => { 
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1')
    .then(data => {
        resolve(data.text())
    })
})

a.then(data => {
    console.log(data)
})

b.then(data => {
    console.log(data)
})

Promise.all([a, b]).then(value => {
    console.log(value)
})



// let a = new Promise((resolve, reject) => {
//     fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
//         .then(data => {
//             resolve(data.text());
//         })

// });

// let b = new Promise((resolve, reject) => {
//     fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=alex')
//         .then(data => {
//             resolve(data.text());
//         })

// });

// Promise.all([a, b]).then(value => {
//     console.log(value);
//     console.log(value[0]);
//     console.log(value[1]);
// });

