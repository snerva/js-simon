//Visualizzare in pagina 5 numeri casuali
//Da lì parte un timer di 30 secondi. 
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt(). 
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creare elemento in dom per randomNumbers
//generare 5 randomNumbers con Math.random e racchiusi in function e stampa in pagina
//setTimeout di 30000 che toglie i randomNumbers e fa vedere i prompt()
//salvare userNumbers inseriti
//if userNumbers == randomNumbers totalNumbers++ e stampa a video userNumbers e totale
const domEl = document.querySelector('.numbers');

//setTimeout( timeout);

const randomNumbList = numbersGenerator(1, 100);
console.log(randomNumbList);

function numbersGenerator(min, max){
    const randomNumbList = [];
    while (randomNumbList.length !== 5){
        const numbEl = generateRandomNumber(min, max);
        if (!randomNumbList.includes(numbEl)){
          randomNumbList.push(numbEl);
        }
    }
    return randomNumbList
}
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min;
}

function videoNumbers(){
     
}