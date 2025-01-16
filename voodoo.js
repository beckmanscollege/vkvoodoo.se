// Retrieve the stored name and image from sessionStorage
const selectedName = sessionStorage.getItem('selectedName');
const selectedImage = sessionStorage.getItem('selectedImage');

// Update the header and default image
if (selectedName && selectedImage) {
    const headerItem = document.querySelector('.header-item.border-left p');
    const defaultImage = document.getElementById('default-image');

    // Set the name in the header
    headerItem.textContent = selectedName;

    // Show the default image
    defaultImage.src = selectedImage;
    defaultImage.alt = selectedName;
}

// Interaction logic for circles and spell list

// Select all circles
const circles = document.querySelectorAll('.circle');

// Select the container for the spell list
const spellContainer = document.getElementById('spell-container');

// Map circles to images
const images = {
    "Imponera på Stefania": document.getElementById('bla-nal-image'),
    "Gå om spelkursen": document.getElementById('rod-nal-image'),
    "Alla skills toppade": document.getElementById('rosa-nal-image'),
    "Städvecka": document.getElementById('svart-nal-image'),
    "Kreativt megaflow hela året": document.getElementById('gul-nal-image'),
    "Inre harmoni": document.getElementById('gron-nal-image'),
    "Bara slaya": document.getElementById('orange-nal-image'),
    "Skrivarsaldo nollas": document.getElementById('gra-nal-image'),
    "Bli påkommen med att sno mjölk": document.getElementById('lila-nal-image'),
    "Snubbla i korridoren": document.getElementById('brun-nal-image'),
};

// Add click event listener to each circle
circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        const spellTextContent = circle.textContent; // Get the circle's text

        // Check if the circle is inactive (opacity set to 0.5)
        if (circle.style.opacity === '0.5') {
            // Remove the corresponding <p> from the spell container
            const spellTexts = Array.from(spellContainer.children);
            const matchingSpell = spellTexts.find((p) => p.textContent === spellTextContent);
            if (matchingSpell) {
                spellContainer.removeChild(matchingSpell);
            }

            // Reactivate the circle
            circle.style.pointerEvents = 'auto'; // Enable clicking
            circle.style.opacity = '1'; // Restore full opacity

            // Hide the corresponding image
            const img = images[spellTextContent];
            if (img) {
                img.classList.add('hidden');
            }
        } else {
            // Create a new <p> element with the class "Spell"
            const spellText = document.createElement('p');
            spellText.classList.add('Spell');
            spellText.textContent = spellTextContent; // Set the text content

            // Append the new <p> to the spell container
            spellContainer.appendChild(spellText);

            // Deactivate the circle
            circle.style.pointerEvents = 'auto'; // Keep it clickable for toggling
            circle.style.opacity = '0.5'; // Reduce opacity to indicate inactive state

            // Show the corresponding image
            const img = images[spellTextContent];
            if (img) {
                img.classList.remove('hidden');
            }
        }
    });
});


// Select the "Activate & Send" button
const activateButton = document.querySelector('button');

// Handle the "Activate & Send" button click
if (activateButton) {
    activateButton.addEventListener('click', () => {
        // Alert the user
        alert("Mohaha! Voodoo spell activated!");

        // Change button text and style
        activateButton.textContent = "Activated!";
        activateButton.style.backgroundColor = "black";
        activateButton.style.color = "white";

    });
}

