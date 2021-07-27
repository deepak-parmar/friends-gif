$(document).ready(function() {
    url = new URL(window.location.href);
    if (url.searchParams.get("image")) {
        $.getJSON('asset/data.json', function(data) {
            $("title").text(data[url.searchParams.get("image")].gif + " | GIFs from FRIENDS");
            $("#episode-gif").prop("src", "asset/images/" + data[url.searchParams.get("image")].gif + ".gif");
            $("#episode-number").text(data[url.searchParams.get("image")].episode.number);
            $("#episode-title").text(data[url.searchParams.get("image")].episode.title);
            
            data[url.searchParams.get("image")].character.forEach(element => {
                $("#episode-character").append("<li>"+ element +"</li>");
            });

            data[url.searchParams.get("image")].keyword.forEach(element => {
                $("#episode-keyword").append("<li>"+ element +"</li>");
            });

            $("body").css("background", "url(asset/images/" + data[url.searchParams.get("image")].gif + ".gif)");
            $("body").css("background-size", "cover");
        });
    } else {
        // if image is not selected page is redirected to home
        window.location.replace("/friends-gifs/");
    }
});
