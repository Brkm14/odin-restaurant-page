function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = '📞 123 456 789';

    const address = document.createElement("p");
    address.textContent = '🏠 926 2nd St, Santa Monica, California';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.classList.add("location");
    restaurantLocation.src = 'images/restaurant-location.png';
    restaurantLocation.alt = 'Bunivers Burger location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}
  
  export default loadContact;