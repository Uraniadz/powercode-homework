"use strict";
const openBtn = document.getElementById('btn');
openBtn.onclick = showBtn;

function showBtn () {
    const openForm = document.getElementById('open_form');
    openForm.classList.add('open_form');
}

const closeForm = document.getElementById('close');
closeForm.onclick = noShowForm;

function noShowForm () {
    const openForm = document.getElementById('open_form');
    openForm.classList.remove('open_form');
}

const formInput = document.querySelector('#input_1');
const formInput2 = document.querySelector('#input_2');
const formInput3 = document.querySelector('#input_3');
const formInput4 = document.querySelector('#input_4');

const generalClose = document.addEventListener('click', function (event) {
    const openForm = document.getElementById('open_form');
    const formH2 = document.getElementById('h2');
    if (event.target !== openBtn && event.target !== openForm && event.target !== formH2 && event.target !== formInput && event.target !== formInput2 && event.target !== formInput3 && event.target !== formInput4) {
    noShowForm();
    }
// console.log(event.target);
})