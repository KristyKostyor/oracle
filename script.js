const button = document.querySelector("#btn");
const par = document.querySelector("#par");





const quotes = [
    "Ваши надежды и планы сбудутся сверх всяких ожиданий.", 
    "Время осушит все слезы и исцелит все раны.",
    "Понять что влюблен просто: ты не можешь уснуть, потому что реальность прекраснее любых снов.", 
    "Время – ваш союзник, лучше отложить принятие важного решения хотя бы на день.",
    "Все люди кажутся нормальными, пока вы не узнаете их поближе.",
    "Вывод — этот момент, в котором ты понял, что устал думать…",
    "Ни одна снежинка не чувствует себя виновной в снегопаде.", 
    "Если сегодня сделать небольшой шаг навстречу мечте, пусть станет короче.",
    "Не доверяй никому свою жизнь. Неси ответственность за нее самостоятельно.",
    "Рискни! Судьба улыбается отчаянным…",
    "Смотри в будущее, не оглядываясь назад. Там уже ничего не изменить.",
    "Ты можешь гораздо больше, чем думаешь.",
    "Середина процесса — не лучшее время, чтобы опускать руки. Боритесь за свое счастье до конца!",
    "Не отказывайте себе в том, что дарит вам улыбку.",
    "Один человек дарит вам положительных эмоций больше, чем все остальные жители мира.", 
    "Где-то между всей этой суетой, спрятана лучшая версия вас.",
    "Улыбнись ему, он давно этого ждет…",
    "Тот, кого ты игнорируешь, еще не разочаровался в тебе…",
    "Отчаянные люди всегда самые счастливые…",
    "Не жди от других подсказок, никто не знает лучше тебя самой, как нужно поступить в этой ситуации.",
    "Внутри каждого из нас есть ребенок, который так и не понял, куда ушло детство."
]


button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})
const photos=['https://images.unsplash.com/photo-1531857454108-c65232a962a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80','https://images.unsplash.com/photo-1528219065209-0e16230ec351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
'https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1467647160393-708009aefd5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1601011850287-43e30b7db748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1487326785089-0c5d85ce7b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1517867134921-7623876aaaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1560831214-d7f3921b9ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1562589600-caa8873808c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1520330600312-d9c00e9aa902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'];

let i=0;
button.addEventListener('click',()=>{
    i++;
    if(i>photos.length-1) {
        i=0;
    }
    document.querySelector('#pic').src=photos[i];

})


