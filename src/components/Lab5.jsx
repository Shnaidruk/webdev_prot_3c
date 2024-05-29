import { Button } from "./Button";
import React, { useState } from 'react';
import l5_p4 from "../img/l5_p4.jpg";
import l5_p6_1 from "../img/l5_p6_1.jpg";
import l5_p6_2 from "../img/l5_p6_2.jpg";
import l5_p6_3 from "../img/l5_p6_3.jpg"


export function Lab5() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base = 
    <div>
        <h3>Тема:</h3>
        <p>
            Функціональне застосування JAVASCRIPT у HTML-документах. Використання масивів 
            у JS-сценаріях. Реалізація програм засобами мови JAVASCRIPT
        </p>
        <h3>Мета:</h3>
        <p>
            Придбати практичні навички роботи з масивами у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT
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


    const teor =
        <div>
            <h3>Застосування JavaScript в HTML</h3>
            <ol>
                <li>
                    <h4>Схема URL</h4>
                    <ul>
                        <li>
                        <p>Вбудований в посилання JavaScript</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
<a href="javascript:alert('Hi!')">Push</a>
                            `}/>
                        </li>
                        <li>
                            <p>Виклик функції за допомогою URL</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
<a href="javascript:myFunction()">Push</a>
                            `}/>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Oбробник подій</h4>
                    <ul>
                        <li>
                        <p>Обробник події кліку по кнопці</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
document.getElementById("button").addEventListener("click", function() {
    alert('Кнопка натиснута!');
                            `}/>
                        </li>
                        <li>
                            <p>Обробник подій прийняття тексту полем введення</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
document.getElementById("myInput").addEventListener("input", function() {
    console.log('Введено текст: ' + this.value);
});
                            `}/>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Підстановка (entity)</h4>
                    <ul>
                        <li>
                        <p>Використовується для надання сторінці динамічності тобто змінності її елементів</p>
                            <textarea readonly style={{width: '90%', height: '150px', 'margin-top': '3%'}} value={`
 <div id="myElement">Початковий текст</div>
 <button id="myButton">Натисни мене</button>

 <script>
     document.getElementById("myButton").addEventListener("click", function() {
         document.getElementById("myElement").innerText = "Текст змінено!";
     });
 </script>
                            `}/>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Вставка (тег SCRIPT)</h4>
                    <ul>
                        <li>
                        <p>Вбудований JavaScript</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
<script>
    console.log("Hello, world!")
</script>
                            `}/>
                        </li>
                        <li>
                            <p>Підключений із зовнішнього файлу JavaScript</p>
                            <textarea readonly style={{width: '90%', height: '100px', 'margin-top': '3%'}} value={`
<script src="script.js"></script>
                            `}/>
                        </li>
                    </ul>
                </li>

            </ol>
        </div>
    
    const p4 =
        <div>
            <h3>Виконання 4 пункту</h3>
            <img src={l5_p4} alt="" />
            <textarea readonly style={{width: '90%', height: '400px', 'margin-top': '3%'}} value={`
function createArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
}

function sumEven(array) {
    let sum = 0;
    for (let i = 2; i < array.length; i += 2) {
        sum += array[i];
    }
    return sum;
}

function findMax(array) {
    let maxElement = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
            maxIndex = i;
        }
    }
    return { maxElement, maxIndex };
}

function findMinOdd(array) {
    let minElement = null;
    let minIndex = -1;
    for (let i = 1; i < array.length; i += 2) {
        if (minElement === null || array[i] < minElement) {
            minElement = array[i];
            minIndex = i;
        }
    }
    return { minElement, minIndex };
}

function sortArr(array) {
    return array.slice().sort((a, b) => a - b);
}

const inpArr = createArray(10);
const sum = sumEven(inpArr);
const {maxElement, maxIndex} = findMax(inpArr);
const {minElement, minIndex} = findMinOdd(inpArr);
const sortov = sortArr(inpArr);

console.log("Task 1");
console.log("Sum of even eltements", sum)
console.log("Max element", maxElement, "with index", maxIndex)
console.log("Min odd element", minElement, "with index", minIndex)

console.log("Task 2");
console.log("Input array", inpArr)
console.log("Sorted array", sortov)

            `}/>
        </div>

    const p6 = 
        <div>
            <h3>Виконання 6 пункту</h3>
            <img src={l5_p6_1} alt="" />
            <img src={l5_p6_2} alt="" />
            <img src={l5_p6_3} alt="" />
            <textarea readonly style={{width: '90%', height: '500px', 'margin-top': '3%'}} value={`
const menuData = [
    {
        name: "Home",
        link: "home.html"
    },
    {
        name: "About",
        link: "about.html",
        subMenu: [
            {
                name: "Company",
                link: "company.html"
            },
            {
                name: "Team",
                link: "team.html"
            }
        ]
    },
    {
        name: "Services",
        link: "services.html",
        subMenu: [
            {
                name: "Web Development",
                link: "web-development.html"
            },
            {
                name: "SEO",
                link: "seo.html"
            }
        ]
    },
    {
        name: "Contact",
        link: "contact.html"
    }
];

function createMenu(menuItems) {
    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
        
        li.appendChild(a);
        if (item.subMenu) {
            li.appendChild(createMenu(item.subMenu));
        }
        ul.appendChild(li);
    });
    return ul;
}

document.getElementById('menu').appendChild(createMenu(menuData));

                `}/>
        </div>

    const vysn =
        <div>
            <h3>Висновки</h3>
            <p>
                У ході виконання лабораторної роботи я отримав навички роботи з масивами в JAVASCRIPT.
                Я також навчився інтегрувати скрипти в HTML-документ, та синхронізувати їх для роботи сценарію.
            </p>
            <p>
               Я побудував веб-застосунок зі сценарієм JS, що реалізує багаторівневе меню, яке складається
               з посилань, це меню не пропадає при переході на наступну сторінку.
            </p>
        </div>

    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №5 Місце розташування сайту, звіту" onClick={() => changeContext(base)} />
                    </li>
                    <li>
                        <Button buttonText="Способи функціонального застосування JavaScript" onClick={() => changeContext(teor)} />
                    </li>
                    <li>
                        <Button buttonText="Пункт 4. Масиви" onClick={() => changeContext(p4)} />
                    </li>
                    <li>
                        <Button buttonText="Пункт 6" onClick={() => changeContext(p6)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №5" onClick={() => changeContext(vysn)} />
                    </li>
                </ul>
            </div>
            <div class="output">
                {context}
            </div>

        </div>
    )
}