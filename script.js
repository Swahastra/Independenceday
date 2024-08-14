document.getElementById('open-btn').addEventListener('click', function() {
    // Hide the gift box and button
    document.getElementById('box').style.display = 'none';
    
    // Change background to gradient
    document.body.style.background = 'linear-gradient(to top, #138808, #b8b8e3, #FF9933)';
    
    // Show the flag container
    document.getElementById('flag-container').classList.remove('hidden');
    
    const music = document.getElementById('background-music');
    music.play();
    

    // Create flowers
    createFlowers();

    // Reveal the message
   setTimeout(() => {
        const message = document.getElementById('message');
        message.classList.remove('hidden');
        
        // Reveal each word of the message with a delay
        const words = message.querySelectorAll('span');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('reveal');
            }, index * 1000); // Delay each word by 1 second
        });
    }, 1000);
});
// Function to create falling flowers
function createFlowers() {
    const flowersContainer = document.getElementById('flowers-container');
    const flowerImages = ['https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-bunch-of-violet-flower-png-image_9199940.png', 
    'https://i.pinimg.com/originals/cd/37/fd/cd37fd0136f4f2c2a0395ba231f39f5a.png', 
    'https://i.pinimg.com/originals/41/17/17/411717169af2015b77e58509e8e04402.png']; // Add your flower image paths here

    for (let i = 0; i < 20; i++) { // Adjust the number of flowers as needed
        const flower = document.createElement('img');
        flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)]; // Randomly select a flower image
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw'; // Random position
        flower.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random fall duration
        flower.style.position = 'absolute'; // Ensure position is absolute for flowers
        flower.style.top = '0'; // Start from the top of the screen
        flowersContainer.appendChild(flower);
    }
}
