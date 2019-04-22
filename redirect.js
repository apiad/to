(function(w) {

    var location = w.location.hash.split(/#/)[1];
    var message = document.querySelector("#message");
    var locationSpan = document.querySelector("#location");
    var timeSpan = document.querySelector("#time");
    var time = 3;

    if (!location) {
        console.log("INVALID LOCATION.");
        message.textContent = "Unknown link: " + location;
        return;
    }

    console.log(location);

    var url = "links.json"

    function redirect(url) {
        if (time == 0) {
            w.location = url;
            return;
        }

        timeSpan.textContent = String(time);
        time -= 1;

        setTimeout(function() { redirect(url); }, 1000);
    }

    fetch(url)
    .then(res => res.json())
    .then((links) => {
        url = links[location];

        if (!url) {
            message.textContent = "Unknown link: " + location;
        }
        else {
            locationSpan.textContent = url;
            locationSpan.setAttribute("href", url);
            redirect(url);
        }
    })
    .catch(err => { throw err });

})(window);

