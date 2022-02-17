'use strict';

const table = document.querySelectorAll('.table');
const firstAddBtn = document.querySelector('#btn-1');
const secondAddBtn = document.querySelector('#btn-2');
const btnDelete = document.querySelector('.btn_del');
const btnCalculate = document.getElementById('calculate')
let count = 1;


function addСalculation(event) {
   if (event.target === firstAddBtn || event.target === secondAddBtn) {
      const addItem = `
         <input autocomplete="off" type="text" id="x${count}" class="input" placeholder="enter num">
         <input autocomplete="off" type="text" id="y${count}"class="input" placeholder="enter num">
         <button class="btn btn_del">Delete</button>
      `;
      const row = document.createElement('div');
      row.classList.add('row');
      row.innerHTML = addItem;
      event.target.before(row);
   }
}

function deleteCalculation(event) {
   if (event.target.classList.contains('btn_del')) {
      event.target.parentNode.remove();
   }
}

function search(event) {
   event.stopPropagation();
   addСalculation(event);
   deleteCalculation(event);
}

function calculate(event) {
   console.log(event);
}

table.forEach(element => {
   element.addEventListener('click', search);
});

btnCalculate.onclick = calculate;


// table3.row[N].x = (table1.row[N].x + table2.row[N].x) / 2;
// table3.row[N].y = (table1.row[N].y + table2.row[N].y) / 2;