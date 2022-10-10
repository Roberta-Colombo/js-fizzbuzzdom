/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1. Creare quadrato html;
2. Creare ciclo per numeri da 1 a 100 (in console);
3. Attraverso % identificare numeri 
    - sia multipli di 3 che di 5 (FizzBuzz);
    - solo multipli di 3 (Fizz);
    - solo multipli di 5 (Buzz); */

const grid = document.querySelector(".grid");

for(let i = 1; i <= 100; i++) {
    if ((i % 5) == 0 && (i % 3) == 0){
        const squareFizzBuzz = document.createElement('div');
        squareFizzBuzz.className = "square";
        grid.append(squareFizzBuzz);
        squareFizzBuzz.append("FizzBuzz");
        console.log(squareFizzBuzz);
    }

   else if ((i % 3) == 0) {
        const squareFizz = document.createElement('div');
        squareFizz.className = "square";
        grid.append(squareFizz);
        squareFizz.append("Fizz");
        console.log(squareFizz);
    }    

    else if ((i % 5) == 0){
        const squareBuzz = document.createElement('div');
        squareBuzz.className = "square";
        grid.append(squareBuzz);
        squareBuzz.append("Buzz");
        console.log(squareBuzz);
    }     
    else {
        const squareNumber = document.createElement('div');
        squareNumber.className = "square";
        grid.append(squareNumber); 
        squareNumber.append(i);
        console.log(squareNumber);
    }
}


