document.querySelectorAll('.box button').forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonContent = e.target.textContent.trim();
    
    let progressBar;
    
    switch (buttonContent) {
      case '👑': 
        progressBar = document.getElementById('pride-bar');
        break;
      case '💪🏻':
        progressBar = document.getElementById('power-bar');
        break;
      case '🩷': 
        progressBar = document.getElementById('life-bar');
        break;
      case '❤️‍🔥':
        progressBar = document.getElementById('love-bar');
        break;
    }

    
    if (progressBar) {
      progressBar.value += 10;
      
      if (progressBar.value >= progressBar.max) {
        progressBar.value = progressBar.max; //
        decreaseProgressBar(progressBar);
      }
    }
  });
});