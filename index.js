

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0;
function increment(){
        count ++ ;
        countEl.innerText=count ;
}


let saveEl =document.getElementById("save_el") ;
console.log(saveEl);
 
let separator = "" ;
function save (){
    console.log(count)
    separator = `${count} -`
    saveEl.textContent += separator ;
    countEl.innerText = 0;
    count = 0;

}
// textcontent is equal to innertext



let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);

let name1 ="guys";
let greeting = `Hello , Welcome To My Page `;
welcomeEl.innerText=greeting+name1 ;
welcomeEl.innerText += "👋"

