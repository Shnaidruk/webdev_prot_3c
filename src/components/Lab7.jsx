import { Button } from "./Button";
import React, { useState } from 'react';
import l7_t1_1 from '../img/l7_t1_1.jpg';
import l7_t1_2 from '../img/l7_t1_2.jpg';
import l7_t2 from '../img/l7_t2.jpg';


export function Lab7() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base =
        <div>
            <h3>Тема:</h3>
        <p>
            WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНІСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.
        </p>
        <h3>Мета:</h3>
        <p>
            Придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
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

    const t1 = 
        <div style={{display:'flex', 'flex-direction': 'column'}}>
            <h3>Вигляд сторінки</h3>
            <img src={l7_t1_1} alt="" style={{width:'80%'}}/>
            <img src={l7_t1_2} alt="" style={{width:'40%'}}/>
            <a href="http://shnaidruk.github.io/web_l7_t1/">Посилання на живу сторінку</a>
            <h3>HTML-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Gallery</h1>
    </header>
    <main>
        <ul class="gallery">

        </ul>
        <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
        <script src="js/gallery.js"></script>
    </main>
</body>
</html>
            `}/> 
            <h3>CSS-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
body{
    font-family: Arial, sans-serif;
    margin: 0;

}
header{
    display: flex;
    justify-content: center;
}

main{
    display: flex;
    justify-content: center;
}

.gallery{
    margin-right: 40px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.gallery-item{
    margin: 30px;
    box-sizing: border-box;
}

.gallery-image{
    display: block;
    width: 300px;
    height: 300px;
    object-fit: cover;
    
    cursor: pointer;
}

.gallery-image:hover{
    transform: scale(1.1);
    border-radius: 5px;
}
            `}/>
            <h3>JS-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
const images = [
    {
        preview: 'img/krik.png',
        original: 'img/krik.png',
        description: 'Едвард Мунк. Крик',
    },
    {
        preview: 'img/time.png',
        original: 'img/time.png',
        description: 'Сальвадор Далі. Постійність Пам*яті',
    },
    {
        preview: 'img/voshod.png',
        original: 'img/voshod.png',
        description: 'Клод Моне. Враження. Схід сонця',
    },
    {
        preview: 'img/pikasso.png',
        original: 'img/pikasso.png',
        description: 'Пабло Пікасс. Герніка',
    },
    {
        preview: 'img/mona.png',
        original: 'img/mona.png',
        description: 'Леонардо да Вінчі. Джоконда',
    },
    {
        preview: 'img/van_gog.png',
        original: 'img/van_gog.png',
        description: 'Вінсент ван Гог. Автопортрет',
    },
    {
        preview: 'img/hanga-baba.png',
        original: 'img/hanga-baba.png',
        description: 'Тарас Шевченко. Ханга-Баба',
    },
    {
        preview: 'img/pey.png',
        original: 'img/pey.png',
        description: 'Пейзаж невідомого автора',
    },
    {
        preview: 'img/zenshina.png',
        original: 'img/zenshina.png',
        description: 'Пабло Пікасо. Жінка що плаче',
    },
    {
        preview: 'img/kozaky.png',
        original: 'img/kozaky.png',
        description: 'Ілля Рєпін. Запорожці',
    },
];

const galleryOrg = document.querySelector('.gallery');

const createImagesHtml = (images) => {
    return images.map(({ preview, original, description }) => {
        return \`
            <li class="gallery-item">
                <img class ="gallery-image" src="\${preview}" 
                data-source="\${original}" 
                alt="\${description}">
            </li>
        \`;
    }).join('');
};



const imagesHtml = createImagesHtml(images)
galleryOrg.innerHTML = imagesHtml;
galleryOrg.addEventListener('click', onImage);

function onImage(event) {
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(\`<img src="\${event.target.dataset.source}" style="max-width: 90vw; max-height: 90vh;"> <p style="color: white">\${event.target.alt}</p>\`);
    instance.show();
}
            `}/>  
        </div>
        
    const t2 =
        <div style={{display:'flex', 'flex-direction': 'column'}}>
            <h3>Вигляд сторінки</h3>
            <img src={l7_t2} alt="" />
            <a href="http:https://shnaidruk.github.io/web_l7_t2///">Посилання на живу сторінку</a>
            <h3>HTML-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    
        <form class="feedback-form" autocomplete="off">
            <label>
                Email
                <input type="email" name="email" autofocus />
            </label>
            <label>
                Message
                <textarea name="message" rows="8"></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    
    <script src="2-form.js"></script>
</body>
</html>
            `}/>
            <h3>CSS-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
.feedback-form{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    background-color: #EADFEF;
    border: 1px solid #D6ABEB;
    border-radius: 10px;
    padding: 20px;
}

.feedback-form label{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.feedback-form input,
.feedback-form textarea{
    width: calc(100%-20px);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #D6ABEB;
}

.feedback-form button{
    width: 30%;
    background-color: #AD00FF;
    border: 2px solid #1C0029;
    border-radius: 10px;
    padding: 10px;
    color: #EADFEF;
    font-size: medium;
    margin-left: 35%;
    cursor: pointer;

}
.feedback-form button:hover{
    background-color: #C050F4;
    border: 2px solid #3E1C4F;
}
.feedback-form input:hover,
.feedback-form textarea:hover{
    border: 1px solid #C256F4;
}


            `}/>
            <h3>JS-код</h3>
            <textarea readonly style={{marginTop: '20px', width: '500px', height: '500px'}} value={`
let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage(){
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData){
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
};

window.addEventListener('load', loadFromLocalStorage);

document.querySelector('.feedback-form').addEventListener('input', event => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    saveToLocalStorage();
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    event.target.reset();
});

            `}/>
        </div>

    const vysn =
        <div style={{width: '50%',}}>
            <h3>Висновки</h3>
            <p>
             У ході виконання лабораторної роботи я роглибив свої знання у використанні JS у своїх веб застосунках.
             Було розроблено два застосунки: галерея основною задачею було розробити модальне вікно, виконуючи її я
             ознайомився з бібліотекою basicLightbox та її методами; вікно вводу що зберігає вписані данні в localStorage
             Під час виконання проблем не виникло.
            </p>
        </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №7 Місце розташування сайту, звіту" onClick={() => changeContext(base)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 1" onClick={() => changeContext(t1)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 2" onClick={() => changeContext(t2)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №7" onClick={() => changeContext(vysn)} />
                    </li>
                    
                </ul>
            </div>
            <div class="output">
                {context}
            </div>

        </div>

    )
}