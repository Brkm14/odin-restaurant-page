function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Classic",
            "The basic type of hamburger with a beef patty, lettuce, tomato, onion, and special sauce."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Cheese",
            "A version of the classic hamburger with melted cheese on top."
        )
    );

    menu.appendChild(
        createMenuItem(
            "BBQ",
            "A burger featuring a beef patty marinated in barbecue sauce, topped with cheddar cheese, onion rings, and barbecue sauce."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Mushroom",
            "A beef patty enriched with mushroom slices, cheese, and optionally onions."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Avocado",
            "A healthy option with sliced avocado, lettuce, tomato, and special sauce."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Chicken",
            "An alternative burger with a chicken breast patty, lettuce, tomato, and chicken sauce."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Vegan",
            "A plant-based option made with vegetables, legumes, and spices, served with a vegan patty instead of beef."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Seafood",
            "A burger featuring a fish or shrimp patty, marinated seafood, fresh greens, and seafood sauce for a unique flavor."
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/hamburgers/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
} 

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;