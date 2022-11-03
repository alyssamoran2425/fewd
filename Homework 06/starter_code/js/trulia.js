

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation
document.querySelector(".trulia-nav-toggle"). addEventListener('click', function(e){
  e.preventDefault();
  let navNumber = document.querySelectorAll('.trulia-nav > nav ul');
  for(let x=0;x<navNumber.length;n++){
    navNumber[x].classList.toggle ('trulia-nav-mobilehide');
  }
});





// Loop through all the cards
    for (var x = 0; x < truliaCards.length; x++){



  // Add a click listener on each card
     truliaCards[x].addEventListener('click',function() 
     {

  // Remove the featured class *TOOK ME FOREVER TO REALIZE I MADE A SPELLING ERROR AND THATS WHY MINE WASNT WORKING* XD
      for (var y = 0; y < truliaCards.length; y++){
        truliaCards[y].classList.remove ('trulia-featured-grid-item');
      }



      // Add the featured class on the one clicked on
      this.classList.add
      ('trulia-featured-grid-item');


    });
    }

  });  



