//1

const takeBtm = document.querySelector("#text")
const take = document.querySelector("#btn")
take.textContent = takeBtm.textContent
console.log(takeBtm)


//2

const takeImg = document.querySelector("#img")

takeImg.src = "https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-yvru-p-kartinki-udivlennii-kot-na-prozrachnom-fon-6.png"

//3



const takeHref = document.querySelector("#myLink")
const takeAlt = document.querySelector("#myImg")

takeAlt.alt = "нема кота все"
takeHref.href = "https://kor.ill.in.ua/m/610x385/2781367.jpg"


//4


const takeUl = document.querySelector("#all")
const firstElement = takeUl.firstElementChild
firstElement.textContent = "ананас "

console.log(takeUl)

