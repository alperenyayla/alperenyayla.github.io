function makeCardFullscreen(card) {
    // Get the card's width and height.
    var width = card.offsetWidth;
    var height = card.offsetHeight;
  
    // Fullscreen the card.
    document.body.style.overflow = "hidden";
    card.style.width = "100vw";
    card.style.height = "100vh";
  
    // Add some writing near the card.
    var text = document.createElement("p");
    text.innerHTML = "This card is now fullscreen!";
    text.style.position = "absolute";
    text.style.top = "50px";
    text.style.left = "50px";
    card.appendChild(text);
  }
  