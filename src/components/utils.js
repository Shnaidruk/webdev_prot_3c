export function swap() {
    var inp1 = document.getElementById("inp1").value;
    var inp2 = document.getElementById("inp2").value;

    document.getElementById("inp1").value = inp2;
    document.getElementById("inp2").value = inp1;
};

export function zmensh() {
    const square = document.getElementById("square");
    var size = parseInt(square.style.width);

    size -= 15;
    if (size >= 15){
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        alert("Minimum size of square")
        size += 15
    }
};

export function zbilsh() {
    const square = document.getElementById("square");
    var size = parseInt(square.style.width);

    size += 15;
    if (size <= 45){
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        alert("Maximum size of square")
        size -=15
    }
};


export function podv(){
    let elements = document.getElementsByClassName("nums")
    for (let i of elements){
        var curNum = parseInt(i.textContent);
        i.textContent = curNum * 2
    }
};

export function info() {
    const catList = document.getElementById("categories");
    const cat = catList.querySelectorAll("li.item");

    console.log('Кількість категорій:', cat.length);

    cat.forEach(category => {
        const catName = category.querySelector('h2').textContent;
        const catItems = category.querySelectorAll('ul > li');

        console.log(`Категорія: ${catName}`);
        console.log(`Кількість елементів: ${catItems.length}`);
    });

};

export function valid(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData);

    form.reset();
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
};

export function col(){
    const changeColorButton = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');
    const body = document.querySelector('body');

    changeColorButton.addEventListener('click', () => {
        const newColor = getRandomHexColor();
        body.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
    });
};

export function crBox(){
    const input = document.querySelector('input');
    const amount = parseInt(input.value, 10);
    const boxesContainer = document.getElementById('boxes');
    let size = 30;
  
    if (amount >= 1 && amount <= 100) {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.margin = '10px'
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
      }
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100');
    }
};

export function desBox(){
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
};
