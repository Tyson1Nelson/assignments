var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function parsePokemon() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemonList = data.objects[0].pokemon;
        for (var i = 0; i < pokemonList.length; i++) { 
            var pokemon = pokemonList[i];
              document.getElementById("demo1").innerHTML += `
            <div>
                <div>name: ${pokemon.name}</div>
                <div>resource_uri: ${pokemon.resource_uri}</div>
                <br>
            </div>`
        }
    }
};
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();