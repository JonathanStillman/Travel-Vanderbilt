$("#photoButton").on("click", function (event) {
    event.preventDefault()

    var city = $("#search").val();
    var queryURL = "https://api.unsplash.com/search/photos?query=" + city + "&client_id=ggD7ic2K_y9nlgDVyyceNQsKf8WR7hnAD4VON0PuLgg";


    $.ajax({
        url: queryURL,
        method: "GET",
        success: function (data) {
            console.log(data)

            data.results.forEach(photo => {
                $("#result").append(`

                    <img src="${photo.urls.regular}"/>
                `)
            })
        }
    })
})
  // Enter City in input id is search

  // Click search button to begin query

  // Return top image to results

  // Update <div> background image to first response


