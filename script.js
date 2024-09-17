// Add an event listener for mouse movement on the document
document.addEventListener('mousemove', (e) => {
    // Select the container that holds the eyes and the eyes themselves
    const eyesContainer = document.querySelector('.eyes');
    const eyes = document.querySelectorAll('.eyes > div');
    
    // If there is no eyes container or the eyes are not exactly two, exit the function
    if(!eyesContainer || eyes.length !== 2) return;
    
    // Get the bounding rectangle of the eyes container
    const containerRect = eyesContainer.getBoundingClientRect();
    // Calculate the center coordinates of the container
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;
  
    // Calculate the angle between the center of the container and the mouse pointer
    const angle = Math.atan2(e.clientY - containerCenterY, e.clientX - containerCenterX);
    // Calculate the distance the eyes should move, limited to a quarter of the eye's width
    const distance = Math.min(
      eyes[0].offsetWidth / 4,
      Math.sqrt(Math.pow(e.clientX - containerCenterX, 2) + Math.pow(e.clientY - containerCenterY, 2))
    );
  
    // Calculate the x and y movement based on the angle and distance
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    
    // For each eye, move the eyeball (assumed to be an <i> element) based on the calculated movement
    eyes.forEach(eye => {
      const eyeBall = eye.querySelector('i');
      eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
