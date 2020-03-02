// Задание 1,2

/*
const txt=`
One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'
`
    console.log (txt.replace (/\s\'/g, ` \"`).replace (/\'\n/g, `\"\n`).replace (/\.\'/, `\.\"`))
*/

// Задание 3*
// TODO
// попробовать сделать класс формы с полями и после window.onload создавать объект
// cо слушателем события 'submit'

const form = document.getElementById('form');
form.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
    event.preventDefault();
    //console.log(event)
    //console.log (event.target [0].value)
    let user = event.target [0].value
    let userregexp = /^[a-zа-я]+$/i
    if (userregexp.test (user)) {
        //console.log ('ok')
        // убрать красный цвет
        document.getElementById ('name').setAttribute ("style", "padding: 2px; border: 1px solid #ccc;")
        document.getElementById ('name-label').setAttribute ("style", "visibility: hidden;")
    } else {
        //console.log ('not ok')
        // подсветить красным цветом
        document.getElementById ('name').setAttribute ("style", "padding: 2px; border: 1px solid red;")
        document.getElementById ('name-label').setAttribute ("style", "visibility: visible;")
    }
    
    let phone = event.target [1].value
    let phoneregexp = /\+7\(\d{3}\)\d{3}\-\d{4}$/
    if (phoneregexp.test (phone)) {
        //console.log ('ok')
        // убрать красный цвет
        document.getElementById ('phone').setAttribute ("style", "padding: 2px; border: 1px solid #ccc;")
        document.getElementById ('phone-label').setAttribute ("style", "visibility: hidden;")
    } else {
        //console.log ('not ok')
        // подсветить красным цветом
        document.getElementById ('phone').setAttribute ("style", "padding: 2px; border: 1px solid red;")
        document.getElementById ('phone-label').setAttribute ("style", "visibility: visible;")
    }
    
    let email = event.target [2].value
    let emailregexp = /^[a-z]+[\.\-][a-z]+\@mail.ru$/i
    //mymail@mail.ru my.mail@mail.ru, или my-mail@mail.ru.
    if (emailregexp.test (email)) {
        //console.log ('ok')
        // убрать красный цвет
        document.getElementById ('email').setAttribute ("style", "padding: 2px; border: 1px solid #ccc;")
        document.getElementById ('email-label').setAttribute ("style", "visibility: hidden;")
    } else {
        //console.log ('not ok')
        // подсветить красным цветом
        document.getElementById ('email').setAttribute ("style", "padding: 2px; border: 1px solid red;")
        document.getElementById ('email-label').setAttribute ("style", "visibility: visible;")
    }   
}
