// Select all .box elements
const boxes = document.querySelectorAll('.box');

// Select the VK27 element
const vk27Text = document.querySelector('.Namn');

// Select the "Activate & Send" button
const activateButton = document.querySelector('button');

// Add event listeners for each box
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        const name = box.getAttribute('data-name');
        if (name) {
            vk27Text.textContent = name; // Update VK27 text dynamically on hover
        }
    });

    box.addEventListener('mouseleave', () => {
        vk27Text.textContent = 'VK27'; // Reset to default when mouse leaves
    });

    box.addEventListener('click', () => {
        const name = box.getAttribute('data-name');
        const image = box.getAttribute('data-image');
        const email = box.getAttribute('data-email'); // Get the email address

        // Store name, image, and email in sessionStorage
        sessionStorage.setItem('selectedName', name);
        sessionStorage.setItem('selectedImage', image);
        sessionStorage.setItem('selectedEmail', email); // Store email in sessionStorage

        // For demonstration: log the selected name, image, and email
        console.log(`Name: ${name}`);
        console.log(`Image: ${image}`);
        console.log(`Email: ${email}`);

        // Optional: Redirect to voodoo.html (or leave this out if you don't want it)
        window.location.href = 'voodoo.html';
    });
});

// Handle the "Activate & Send" button click (optional)
if (activateButton) {
    activateButton.addEventListener('click', () => {
        // Retrieve the selected name, image, and email from sessionStorage
        const selectedName = sessionStorage.getItem('selectedName');
        const selectedImage = sessionStorage.getItem('selectedImage');
        const selectedEmail = sessionStorage.getItem('selectedEmail');

        // Log the selected spells and the email
        console.log(`Selected Spell: ${selectedName}`);
        console.log(`Selected Image: ${selectedImage}`);
        console.log(`Selected Email: ${selectedEmail}`);
    });
}
