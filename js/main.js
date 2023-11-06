fetch("https://raw.githubusercontent.com/oliver2Carglass/Fruits/main/Bourne.json")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur lors de la récupération du JSON");
        }
    })
    .then(function (data) {
        console.log(data);
        var outputElement = document.getElementById("output");

        data.fruits.forEach(function (fruit) {
            // Crée un élément div pour chaque fruit
            var divFruit = document.createElement("div");
            divFruit.id="fruit"

            // Crée un élément h2 pour le nom du fruit
            var name = document.createElement("h2");
            name.textContent = fruit.name;
            name.id="name"

            // Crée un élément p pour le prix du fruit
            var price = document.createElement("p");
            price.textContent = fruit.price;
            price.id="price"

            // Crée un élément p pour le poids du fruit
            var weight = document.createElement("p");
            weight.textContent = "Weight: " + fruit.weight;
            weight.id="weight"

            // Crée un élément img pour afficher l'image du fruit
            var image = document.createElement("img");
            image.src = fruit.image;
            image.id="Fruit-image"

            // Ajoute les éléments au div du fruit
            divFruit.appendChild(name);  
            divFruit.appendChild(image);
            divFruit.appendChild(weight);
            divFruit.appendChild(price);
        

            // Ajoute le div du fruit à la page
            outputElement.appendChild(divFruit);
        });
    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération du JSON :", error);
    });
