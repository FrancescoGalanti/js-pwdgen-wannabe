/*
**javascript
**/



// prima variabile //
 var nomeUtente = prompt('quale il tuo nome ?');


 // seconda variabile//

 var usernameUtente = prompt('quale il tuo cognome ?');

 // terza varibile//

 var colorUtente = prompt('quale il tuo colore preferito ?') ;

 // Password//

 var password = nomeUtente + usernameUtente + colorUtente;


// output primo//


document.getElementById('Password').innerHTML = password

// output secondo//
console.log("PASSWORD: " + password)
