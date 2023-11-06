//afficher les elements de Bourne.JSON dans la page HTML avec une boucle for en utilisant fetch



fetch("Bourne.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var outputElement = document.getElementById("output");
        var htmlContent = "<ul>";
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                htmlContent += "<li><strong>" + key + ":</strong> " + data[key] + "</li>";
            }
        }
        htmlContent += "</ul>";
        outputElement.innerHTML = htmlContent;
    })















//var outputElement = document.getElementById("output");
//
//// Générez du contenu HTML en utilisant les données JSON
//var htmlContent = "<ul>";
//for (var key in jsonData) {
//    if (jsonData.hasOwnProperty(key)) {
//        htmlContent += "<li><strong>" + key + ":</strong> " + jsonData[key] + "</li>";
//    }
//}
//htmlContent += "</ul>";
//
//// Affichez le contenu généré dans la page HTML
//outputElement.innerHTML = htmlContent;