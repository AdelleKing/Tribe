var map = L.map('map').setView([51.37401923130429, 0.5968345726985553], 12);

    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    coords = [[51.35485429680282, 0.554537023666158], [51.39078890842852, 0.5032439890530246], [51.3612450552987, 0.6205234095879504], [51.38074489459233, 0.5285970519167649], [51.387973486541725, 0.5065919960991682], [51.44126219331351, 0.7734097003264085]];

    let l =coords.length;

    var apart = document.querySelector('#apart1');
    var apart = document.querySelector('#apart2');
    var apart = document.querySelector('#apart3');
    var apart = document.querySelector('#apart4');
    var apart = document.querySelector('#apart5');
    var apart = document.querySelector('#apart6');

    aparts = [apart1, apart2, apart3, apart4, apart5, apart6]

    for (let i= 0; i < l; i++){
        var marker =L.marker(coords[i]).addTo(map);

        aparts[i].addEventListener("mouseover", ()=> {
            map.flyTo(coords[i],16);
        })
    }

/*accordion*/
 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}