document.addEventListener("DOMContentLoaded", function() {
    // Toggle pour la section Concept
    const conceptImage = document.querySelector(".concept-image img");
    const conceptSection = document.querySelector(".concept-section");
    const conceptGridImages = document.querySelectorAll(".concept-section .images-grid img");
    const conceptVoirPlusBtn = document.querySelector(".concept-content .voir-plus img");
    const h1Concept = document.querySelector(".concept-content h1");
    let conceptToggled = false;
    conceptImage.addEventListener("click", function() {
      conceptToggled = !conceptToggled;
      if(conceptToggled) {
        conceptSection.classList.add("toggled");
        conceptGridImages.forEach(img => { img.style.filter = "none"; });
        conceptVoirPlusBtn.src = "assets/hand-button/voir-plus-colored.png";
        conceptImage.src = "assets/pictos/colored-pic/ampoule-active.png";
        h1Concept.style.color = "#2DDFF3";
      } else {
        conceptSection.classList.remove("toggled");
        conceptGridImages.forEach(img => { img.style.filter = ""; });
        conceptVoirPlusBtn.src = "assets/hand-button/voir-plus-black.png";
        conceptImage.src = "assets/pictos/black-pic/ampoule.png";
        h1Concept.style.color = "";
      }
    });
    
    // Toggle pour la section Portfolio
    const portfolioSection = document.querySelector(".portfolio-section");
    const portfolioSmallImage = document.querySelector(".portfolio-small-image");
    const portfolioLargeImage = document.querySelector(".portfolio-large-image");
    const portfolioSubtitle = document.querySelector(".portfolio-subtitle");
    const h1Portfolio = document.querySelector(".portfolio-title");
    let portfolioToggled = false;
    portfolioSmallImage.addEventListener("click", function() {
      portfolioToggled = !portfolioToggled;
      if(portfolioToggled) {
        portfolioSection.classList.add("toggled");
        portfolioSmallImage.src = "assets/pictos/colored-pic/book-ouvert.png";
        portfolioLargeImage.style.filter = "none";
        
        portfolioSubtitle.style.borderRadius = "3px";
        h1Portfolio.style.color = "#2DDFF3";
      } else {
        portfolioSection.classList.remove("toggled");
        portfolioSmallImage.src = "assets/pictos/black-pic/book-ferme.png";
        portfolioLargeImage.style.filter = "grayscale(100%)";
        portfolioSubtitle.style.backgroundColor = "";
        portfolioSubtitle.style.padding = "";
        portfolioSubtitle.style.borderRadius = "";
        h1Portfolio.style.color = "";
      }
    });
  });





  document.addEventListener("DOMContentLoaded", function() {
    // Ciblage de l'élément pour activer le mode dessin
    const footerSmallImage = document.querySelector(".footer-small-image");
    const footerSection = document.querySelector(".footer-section");
    const footerCanvas = document.getElementById("footerCanvas");
    let drawingMode = false;
  
    // Fonction pour redimensionner le canvas sur le footer
    function resizeFooterCanvas() {
      footerCanvas.width = footerSection.offsetWidth;
      footerCanvas.height = footerSection.offsetHeight;
    }
    resizeFooterCanvas();
    window.addEventListener("resize", resizeFooterCanvas);
  
    const ctx = footerCanvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0, lastY = 0;
    
    // Crée un gradient personnalisé (de bleu à rose)
    function getGradient() {
      const grad = ctx.createLinearGradient(0, 0, footerCanvas.width, footerCanvas.height);
      grad.addColorStop(0, "#2DDFF3"); // Bleu
      grad.addColorStop(1, "#FF69B4"); // Rose
      return grad;
    }
    
    // Fonctions de dessin
    function startDrawing(e) {
      isDrawing = true;
      const rect = footerCanvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    }
    function draw(e) {
      if (!isDrawing) return;
      const rect = footerCanvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      ctx.strokeStyle = getGradient();
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
      lastX = currentX;
      lastY = currentY;
    }
    function stopDrawing() {
      isDrawing = false;
    }
    
    // Toggle mode dessin via clic sur la petite image
    footerSmallImage.addEventListener("click", function() {
      drawingMode = !drawingMode;
      if (drawingMode) {
        footerSmallImage.src = "assets/pictos/colored-pic/palette-active.png"; // image active
        footerCanvas.style.display = "block";
        footerCanvas.style.pointerEvents = "auto";
        // (Optionnel) Vous pouvez ajouter des modifications de style ici
      } else {
        footerSmallImage.src = "assets/pictos/colored-pic/palette-accueil.png"; // image par défaut
        footerCanvas.style.pointerEvents = "none";
        // Garder les dessins sur le canvas : ne pas masquer le canvas pour conserver les traits
        // footerCanvas.style.display = "none"; // Si vous souhaitez le masquer, sinon commentez cette ligne
      }
    });
    
    // Gestion du dessin sur le canvas (uniquement si mode dessin est activé)
    footerCanvas.addEventListener("mousedown", startDrawing);
    footerCanvas.addEventListener("mousemove", draw);
    footerCanvas.addEventListener("mouseup", stopDrawing);
    footerCanvas.addEventListener("mouseout", stopDrawing);
  });
  