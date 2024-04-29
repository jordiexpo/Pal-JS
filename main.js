document.querySelectorAll('.box button').forEach((button) => {
 button.addEventListener('click', (e) => {
   
   const progressBar = e.target.nextElementSibling;

   
   if (progressBar && progressBar.tagName === 'PROGRESS') {
     
     let newValue = parseFloat(progressBar.value) + 10;

     
     if (newValue > progressBar.max) {
       newValue = progressBar.max;
     }

    
     progressBar.value = newValue;
   }
 });
});