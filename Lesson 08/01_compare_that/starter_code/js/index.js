
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);

     console.log(a);
     console.log(b);
 
     // Add comparison logic
    
      // Are they not numbers
      if( isNaN(a) || isNaN(b)){
        comparison = "N/A";
      } else if (a > b){
        // Is A more than B
        comparison = ">";
      } else if (a < b){
        // Is B more than A
        comparison = "<";
      } else{
        comparison = "=";
      }

      // Is A more than B

      // Is B more than A

      // Is A equal to B


 
     document.querySelector('#comparison').innerText = comparison;
   };
 