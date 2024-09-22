
document.querySelectorAll('.duplicate').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const cardToDuplicate = event.target.closest('.card');
      const newCard = cardToDuplicate.cloneNode(true);
      const container = document.querySelector('.container');
      container.appendChild(newCard);
    });
  });
  
  
  document.querySelectorAll('.rename').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const cardToTarget = event.target.closest('.card');
      const title = document.querySelector('.title')
      title.innerHTML = "New Name"
    });
  });
  
  document.querySelectorAll('.recolor').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const cardToTarget = event.target.closest('.card');
      cardToTarget.classList.toggle('fancy');
    });
  });
  
  
  document.querySelectorAll('#delete').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const cards = document.querySelectorAll('.container .card')
      if(cards.length>1){
        cards[cards.length-1].remove();
      }
    });
  });
  
  
  
  document.querySelectorAll('.reimage').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const cardToTarget = event.target.closest('.card');
      const memeImage = cardToTarget.querySelector('meme-maker'); // Find the meme-maker element inside the card
      memeImage.setAttribute('image-url', "https://www.pngmart.com/files/11/Doge-Meme-PNG-File.png");
    });
  });