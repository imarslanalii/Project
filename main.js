// console.log(window)

// alert(1)

// Single element
// console.log(document.getElementById('my-form'))
// console.log(document.querySelector('.container'))


// multiple Element Selector
// console.log(document.querySelector('.item'))

// console.log(document.getElementsByClassName('item'))

// const items = document.querySelector('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items')

// // ul.remove()
// // ul.lastElementChild.remove()

// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'


// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background =
//     '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
// })

let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode( `${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        // clear fields 
        nameInput.value = ''
        emailInput.value = ''
    }
}
