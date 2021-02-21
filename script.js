let meta = document.createElement('meta');     // Добавление meta
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

let title = document.createElement('title');     // Добавление title
title.textContent = "Document";
document.head.appendChild(title);

let link = document.createElement('link');     // Добавление шрифта
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap');
document.head.appendChild(link);

let style = document.createElement('style');     // Добавление style
document.head.appendChild(style);

// Верхний контейнер

let div_header = document.createElement('div');
document.body.appendChild(div_header);
div_header.classList.add('header');

let header_title = document.createElement('h1');
div_header.appendChild(header_title);
header_title.classList.add('header_title');
header_title.textContent = "Choose Your Option";

let header_text = document.createElement('p');
div_header.appendChild(header_text);
header_text.classList.add('header_text');
header_text.textContent = "But I must explain to you how all this mistaken idea of denouncing ";

// Нижний контейнер

let div_footer = document.createElement('div');
document.body.appendChild(div_footer);
div_footer.classList.add('footer');

// Нижний левый контейнер

let div_footer_left = document.createElement('div');
div_footer.appendChild(div_footer_left);
div_footer_left.classList.add('footer_block');
div_footer_left.addEventListener('mouseover', function() {     // Добавление классов при наведении мышки на контейнер
    div_footer_left.classList.add('footer_active');
    footer_left_name.classList.add('footer_name_active');
    footer_left_title.classList.add('footer_text_active');
    footer_left_text.classList.add('footer_text_active');
    button_left.classList.add('button_active');
});
div_footer_left.addEventListener('mouseout', function() {     // Удаление классов при отводе мышки с контейнера
    div_footer_left.classList.remove('footer_active');
    footer_left_name.classList.remove('footer_name_active');
    footer_left_title.classList.remove('footer_text_active');
    footer_left_text.classList.remove('footer_text_active');
    button_left.classList.remove('button_active');
});

let footer_left_name = document.createElement('p');
div_footer_left.appendChild(footer_left_name);
footer_left_name.classList.add('footer_name');
footer_left_name.classList.add('footer_wrapper');
footer_left_name.textContent = "Freelancer";

let footer_left_title = document.createElement('h2');
div_footer_left.appendChild(footer_left_title);
footer_left_title.classList.add('footer_title');
footer_left_title.classList.add('footer_wrapper');
footer_left_title.textContent = "Initially designed to";

let footer_left_text = document.createElement('p');
div_footer_left.appendChild(footer_left_text);
footer_left_text.classList.add('footer_text');
footer_left_text.classList.add('footer_wrapper');
footer_left_text.textContent = "But I must explain to you how all this mistaken idea of denouncing ";

let button_left = document.createElement('button');
div_footer_left.appendChild(button_left);
button_left.classList.add('button');
button_left.textContent = "Start Here";

// Нижний правый контейнер

let div_footer_right = document.createElement('div');
div_footer.appendChild(div_footer_right);
div_footer_right.classList.add('footer_block');
div_footer_right.addEventListener('mouseover', function() {     // Добавление классов при наведении мышки на контейнер
    div_footer_right.classList.add('footer_active');
    footer_right_name.classList.add('footer_name_active');
    footer_right_title.classList.add('footer_text_active');
    footer_right_text.classList.add('footer_text_active');
    button_right.classList.add('button_active');
});
div_footer_right.addEventListener('mouseout', function() {     // Удаление классов при отводе мышки с контейнера
    div_footer_right.classList.remove('footer_active');
    footer_right_name.classList.remove('footer_name_active');
    footer_right_title.classList.remove('footer_text_active');
    footer_right_text.classList.remove('footer_text_active');
    button_right.classList.remove('button_active');
});

let footer_right_name = document.createElement('p');
div_footer_right.appendChild(footer_right_name);
footer_right_name.classList.add('footer_name');
footer_right_name.classList.add('footer_wrapper');
footer_right_name.textContent = "Studio";

let footer_right_title = document.createElement('h2');
div_footer_right.appendChild(footer_right_title);
footer_right_title.classList.add('footer_title');
footer_right_title.classList.add('footer_wrapper');
footer_right_title.textContent = "Initially designed to";

let footer_right_text = document.createElement('p');
div_footer_right.appendChild(footer_right_text);
footer_right_text.classList.add('footer_text');
footer_right_text.classList.add('footer_wrapper');
footer_right_text.textContent = "But I must explain to you how all this mistaken idea of denouncing ";

let button_right = document.createElement('button');
div_footer_right.appendChild(button_right);
button_right.classList.add('button');
button_right.textContent = "Start Here";

style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Arvo';
        width: 960px;
        height: 700px;
        margin: auto;
        margin-top: 80px;
    }
    
    /* Верхний контейнер */
    .header {
        margin: auto;
        width: 464px;
        height: 84px;
        margin-top: 50px;
    }
    .header_title {
        text-align: center;
        font-size: 36px;
        font-weight: 100;
    }
    .header_text {
        font-family: sans-serif;
        margin-top: 10px;
        font-size: 14px;
        color: #9FA3A7;
        text-align: center;
    }

    /* Нижний контейнер */
    .footer {
        display: flex;
        width: 806px;
        margin: auto;
        margin-top: 70px;
    }
    .footer_wrapper {
        width: 210px;
        margin: auto;
    }

    .footer_block {
        width: 401px;
        height: 480px;
        background-color: #fff;
    }
    .footer_active {
        background-color: #8F75BE;
    }
    .footer_name {
        text-transform: uppercase;
        font-size: 12px;
        color: #9FA3A7;
        letter-spacing: 2px;
        font-family: sans-serif;
        font-weight: bold;
        text-align: center;
        margin-top: 70px;
    }
    .footer_name_active {
        color: gold;
    }
    .footer_title {
        text-align: center;
        margin-top: 20px;
        font-weight: 100;
        font-size: 36px;
    }
    .footer_text {
        text-align: center;
        margin-top: 30px;
        font-size: 12px;
        color: #9FA3A7;
        font-family: sans-serif;
        line-height: 25px;
    }
    .footer_text_active {
        color: white;
    }
    .button {
        text-align: center;
        margin-left: 120px;
        margin-top: 50px;
        border: 3px solid #FFC80A;
        border-radius: 50px;
        width: 150px;
        height: 46px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        background-color: white;
        cursor: pointer;
        outline: 0;
    }
    .button_active {
        background-color: #8F75BE;
        color: white;
    }
`