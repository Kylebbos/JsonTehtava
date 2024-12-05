fetch("https://raw.githubusercontent.com/Kylebbos/my-json-test/main/palaveri.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (responseJson) {
    kerro(responseJson);
  })
  .catch(function (error) {
    document.getElementById("palaveri").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
    console.error("Virhe ladattaessa JSON-dataa:", error);
  });

function kerro(data) {
  let teksti = "";

  teksti += "<h1>Palaverin aihe: " + data.palaverin_aihe + "</h1>";
  teksti += "<p>Osallistujien lukumäärä: " + data.osallistujien_lukumäärä + "</p>";

  teksti += "<h3>Osallistujat</h3><ul>";
  for (let i = 0; i < data.osallistujat.length; i++) {
    teksti += "<li>" + data.osallistujat[i] + "</li>";
  }
  teksti += "</ul>";
  teksti += "<p>Paikka: " + data.palaverin_paikka + "</p>";

  teksti +=
    "<p>Alkamisaika: " +
    new Date(data.palaverin_alkaminen).toLocaleString("fi-FI") +
    "</p>";

  teksti += "<p>Kesto: " + data.palaverin_kesto + "</p>";

  document.getElementById("vastaus").innerHTML = teksti;
}
