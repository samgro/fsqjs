$(document).ready(function() {
    var client_id = "1NTL4E2XHJHXCRFJLKVQ124LUAI3JVBTA1XQ5RZEHJCCTYLA";
    var client_secret = "ZCGEC3VKHEVR0DROWVFEXIXM53SSKMJX2LPBD0ATIWXXVVHM";
    $("#submit").click(function() {
        $.get("https://api.foursquare.com/v2/venues/search" +
            "?client_id=" + client_id +
            "&client_secret=" + client_secret +
            "&v=20151209" +
            "&near=" + $("#address").val() +
            "&query=pizza",
            function(data) {
                console.log(data)
                $("#results").html("");
                var venues = data["response"]["venues"]
                for (var i = 0; i < venues.length; i++) {
                    $("#results").append("<li>" + venues[i]["name"] + ": " + venues[i]["contact"]["formattedPhone"] + "</li>");
                }
            });
    });
});