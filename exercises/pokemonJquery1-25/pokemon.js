$.get("http://pokeapi.co/api/v1/pokedex/1/", function (object) {
    var pokemon = object.pokemon
    for (var i = 0; i < pokemon.length; i++) {
        var pokemonList = pokemon[i];
        var pokeName = pokemonList.name;
        var html = '';
        html += "<div class= 'col-xs-4'>" + pokeName.toUpperCase() + "</div>";
    
            $("#addInfo").append(html);
            console.log(pokemonList);
        //document.getElementById("addInfo").innerHTML += `<div>${pokemonList.name}</div>`;
    }
});
$("div").css("color", "blue")