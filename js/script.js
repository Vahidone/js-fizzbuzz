
// prendiamo la classe del contenitore dei box 
const boxContainer = document.querySelector('.box-container');
// aggiungiamo il titolo 
const titolo = document.createElement('h1');
titolo.append('FizzBuzzDOM');
boxContainer.append(titolo);

// usiamo il ciclo For 
for (let i = 1; i <= 100; i++){
    // creiamo il div per i box 
    const box = document.createElement('div');
    // diamo una classe ai nostri box 
    box.classList.add('box');
   

  
    // usare "if" per creare condizioni
    if ((!(i % 3)) && (!(i % 5))) {
      box.append('FizzBuzz')
      box.classList.add('box-fizzbuzz');
    } else if (!(i % 3)) {
      box.append('Fizz');
      box.classList.add('box-fizz'); 
    } else if (!(i % 5)) {
      box.append('Buzz');
      box.classList.add('box-buzz');
    }
    else {
      box.append(i);
    }

  boxContainer.append(box);
 
}

