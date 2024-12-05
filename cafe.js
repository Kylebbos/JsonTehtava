fetch("https://raw.githubusercontent.com/Kylebbos/my-json-test/main/oma.json")

  .then(function (response) {
    return response.json();
  })

  .then(function (responseJson) {

    kerro(responseJson);
  })

  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
    console.error("Virhe ladattaessa JSON-dataa:", error);
  });

function kerro(data) {

  let teksti = "";

  teksti += "<h1>" + data.yritys + "</h1>";

  teksti += "<h3>Yhteystiedot</h3>";
  teksti += "<p>Osoite: " + data.yhteystiedot.osoite + "</p>";
  teksti += "<p>Puhelin: " + data.yhteystiedot.puhelin + "</p>";
  teksti += "<p>Email: " + data.yhteystiedot.email + "</p>";

  teksti += "<h3>Tuotteet</h3><ul>";
  for (let i = 0; i < data.tuotteet.length; i++) {
    teksti += "<li>" + data.tuotteet[i] + "</li>";
  }
  teksti += "</ul>";

  teksti += "<h3>Henkilökunta</h3><ul>";
  for (let i = 0; i < data.henkilokunta.length; i++) {
    teksti +=
      "<li>" +
      data.henkilokunta[i].nimi +
      " - " +
      data.henkilokunta[i].titteli +
      "</li>";
  }
  teksti += "</ul>";

  document.getElementById("vastaus").innerHTML = teksti;
}
