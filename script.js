// Add JavaScript for the Warteg Bemo application

document.addEventListener('DOMContentLoaded', () => {
    // Functionality to handle 'Pesan' button clicks
    const orderButtons = document.querySelectorAll('.menu-item button');

    orderButtons.forEach(button => {
        button.addEventListener('click', event => {
            const menuItem = event.target.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('p').textContent;
        });
    });

    // Functionality to add an item to a cart or process orders (future scope)
    // This can include updating a cart UI or sending data to a backend server

    console.log('Sukseskan Milad Ke-12 Dengan Kegembiraan.');
});
