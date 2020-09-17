$("#photoButton").on("click", function (event) {
    event.preventDefault()

    var city = $("#search").val();
    var backgroundImage = document.getElementById("image");
    // Updated Query to only return 1 page with 1 result
    var queryURL = "https://api.unsplash.com/search/photos?query=" + city + "&page=1&per_page=1&client_id=ggD7ic2K_y9nlgDVyyceNQsKf8WR7hnAD4VON0PuLgg";


    $.ajax({
        url: queryURL,
        method: "GET",
        success: function (data) {
            console.log(data)

            $("#image").attr("style", `background-image: url(${data.results[0].urls.regular})`);
        }
    });

    // SECOND API FUNCTION BEGINS HERE 
    var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city;

    $.ajax({
        url: yelpURL,
        method: "GET",
        headers: { "Authorization": "Bearer MJ5-bJhkCujBxJVttLJ0vxzLgs5ge3wRewkDm32IiqjBo69dYZkqZ-oz679UL0x0bTYNRiJHmfBO1JXrB8W7b4djrkYhgMFUgpRmcdhcy4NMbz7SSqbEhpeDo8NiX3Yx" },
        success: function (data) {
            console.log(data)
        }
    });
})

// Enter City in input id is search.......COMPLETE

// Click search button to begin query.......COMPLETE

// Return top image to results........COMPLETE

// Update <div> background image to first response........IN PROGRESS


// API KEY (YELP): MJ5-bJhkCujBxJVttLJ0vxzLgs5ge3wRewkDm32IiqjBo69dYZkqZ-oz679UL0x0bTYNRiJHmfBO1JXrB8W7b4djrkYhgMFUgpRmcdhcy4NMbz7SSqbEhpeDo8NiX3Yx


