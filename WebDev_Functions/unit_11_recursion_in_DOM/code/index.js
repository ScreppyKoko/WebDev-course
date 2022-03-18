//! получаем все блоки внутри искомого

const blocks = document.querySelectorAll('.test *'); //! NodeList
console.log(blocks);


//! рекурсивный перебор DOM элементов

const tree = document.querySelector('.test');
console.log(tree);
console.log(tree.children)

function treeTravelsal(elem) {
    let innerElements = elem.children;
    // console.log(innerElements);  //! HTMLCollection
    console.dir(elem);
    Array.from(innerElements).forEach(item => treeTravelsal(item));
}

treeTravelsal(tree);
