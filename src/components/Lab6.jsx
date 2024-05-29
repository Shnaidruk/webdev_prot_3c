import { Button } from "./Button";
import React, { useState } from 'react';
import { swap, zmensh, zbilsh, podv, info, valid, col, crBox, desBox} from "./utils"

export function Lab6() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base =
        <div>
            <h3>Тема:</h3>
        <p>
            Класи. Об*єктна модель документа DOM. Події. Об*єкт подій. Делегування подій. Модульність коду 
        </p>
        <h3>Мета:</h3>
        <p>
            Придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
            .Реалізація програм засовами мови JAVASCRIPT
        </p>
        <h3 >Місце розташування:</h3>
        <ul>
            <li>
                Github репозиторій власного проекту:
                <a href="https://github.com/Shnaidruk/webdev_project_c3" target="blank">Перейти</a>
            </li>
            <li>
                Github репозиторій сторінки зі звітами:
                <a href="https://github.com/Shnaidruk/webdev_prot_3c" target="blank">Перейти</a>
            </li>
        </ul>
        </div>

    const t2 = 
        <div>
            <div style={{display: 'inline-block', height: '110px', backgroundColor: 'rgb(80, 176, 98)', padding: '10px'}}>
                <h3>ЗАВДАННЯ 2</h3>
                <button onClick={swap}>SWAP ME</button>
                <input type="text" id="inp1" placeholder="???"/>
                <input type="text" id="inp2" placeholder="!!!"/>
            </div>

            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '150px'}} value={`
export function swap() {
    var inp1 = document.getElementById("inp1").value;
    var inp2 = document.getElementById("inp2").value;

    document.getElementById("inp1").value = inp2;
    document.getElementById("inp2").value = inp1;
}
                `}/>
            </div>
            
        </div>
        

    const t4 = 
        <div>
            <div style={{display: 'inline-block', height:'140px', backgroundColor: 'rgb(80, 176, 98)', padding: '10px'}}>
                <h3>ЗАВДАННЯ 4</h3>
                <div id="square" style = {{width: "30px", height: "30px", border: "2px dashed red", margin: '5px'}}></div>
                <button onClick={zmensh}>Зменшити</button>
                <button onClick={zbilsh}>Збільшити</button>
            </div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '470px'}} value={`
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
                `}/>
            </div>
        </div>

    const t6 =
        <div>
            <div style={{display: 'inline-block', height:'240px', backgroundColor: 'rgb(80, 176, 98)', padding: '10px'}}>
                <h3>ЗАВДАННЯ 6</h3>
                <ul>
                    <li class="nums">1</li>
                    <li class="nums">4</li>
                    <li class="nums">8</li>
                    <li class="nums">16</li>
                    <li class="nums">20</li>
                    <li class="nums">30</li>
                </ul>
                <button onClick={podv}>Подвоїти</button>
            </div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '150px'}} value={`
export function podv(){
    let elements = document.getElementsByClassName("nums")
    for (let i of elements){
        var curNum = parseInt(i.textContent);
        i.textContent = curNum * 2
    }
};
                `}/>
            </div>
        </div>
        

    const t7 =
        <div>
            <div>
                <ul id="categories">
                    <li class="item">
                        <h2>Animals</h2>
                        <ul>
                        <li>Cat</li>
                        <li>Hamster</li>
                        <li>Horse</li>
                        <li>Parrot</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h2>Products</h2>
                        <ul>
                        <li>Bread</li>
                        <li>Prasley</li>
                        <li>Cheese</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h2>Technologies</h2>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        </ul>
                    </li>
                </ul>
                <button onClick={info}>Вивести інформацію</button>
            </div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '300px'}} value={`
export function info() {
    const catList = document.getElementById("categories");
    const cat = catList.querySelectorAll("li.item");

    console.log('Кількість категорій:', cat.length);

    cat.forEach(category => {
        const catName = category.querySelector('h2').textContent;
        const catItems = category.querySelectorAll('ul > li');

        console.log(\`Категорія: \${catName}\`);
        console.log(\`Кількість елементів: \${catItems.length}\`);
    });

};
                `}/>
            </div>
        </div>

    const t8 =
        <div>
            <div>
            <form class="login-form" onSubmit={valid}>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <button type="submit">Log in</button>
            </form>
            </div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '400px'}} value={`
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
                `}/>
            </div>
        </div>

    const t9 =
        <div>
            <div class="widget" ref={col}>
                <p>Background color: <span class="color">-</span></p>
                <button type="button" class="change-color">Change color</button>
            </div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '400px'}} value={`
function getRandomHexColor() {
    return \`#\${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}\`;
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
                `}/>
            </div>
        </div>

    const t10 =
        <div>
            <div id="controls">
                <input type="number" min="1" max="100" step="1" />
                <button type="button" data-create onClick={crBox}>Create</button>
                <button type="button" data-destroy onClick={desBox}>Destroy</button>
            </div>

            <div id="boxes" style={{display: 'flex'}}></div>
            <div>
                <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
function getRandomHexColor() {
    return \`#\${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}\`;
};

export function crBox(){
    const input = document.querySelector('input');
    const amount = parseInt(input.value, 10);
    const boxesContainer = document.getElementById('boxes');
    let size = 30;
  
    if (amount >= 1 && amount <= 100) {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = \`\${size}px\`;
        box.style.height = \`\${size}px\`;
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
                `}/>
            </div>
        </div>

    const vysn =
        <div style={{width: '50%',}}>
            <h3>Висновки</h3>
            <p>
                У ході виконання лабораторної роботи я отримав знання про класи, об*єктну модель документа, події та їх делегування а також про THROTTLE.
                Все це використав на практиці під час розробки живої сторінки з виконаними завданнями.
            </p>
        </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №6 Місце розташування сайту, звіту" onClick={() => changeContext(base)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 2" onClick={() => changeContext(t2)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 4" onClick={() => changeContext(t4)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 6" onClick={() => changeContext(t6)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 7" onClick={() => changeContext(t7)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 8" onClick={() => changeContext(t8)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 9" onClick={() => changeContext(t9)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 10" onClick={() => changeContext(t10)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №6" onClick={() => changeContext(vysn)} />
                    </li>
                    
                </ul>
            </div>
            <div class="output">
                {context}
            </div>

        </div>

    )
}