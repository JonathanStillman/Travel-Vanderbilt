$("#photoButton").on("click", function (event) {
    event.preventDefault()

    var city = $("#search").val();
    // Updated Query to only return 1 page with 1 result
    var queryURL = "https://api.unsplash.com/search/photos?query=" + city + "&page=1&per_page=1&client_id=ggD7ic2K_y9nlgDVyyceNQsKf8WR7hnAD4VON0PuLgg";


    $.ajax({
        url: queryURL,
        method: "GET",
        success: function (data) {
            console.log(data)
        }
    })
    
})

/* This is where we need to find the code to append the image.  Nothing deleted just commented out
    The above AJAX call returns 1 image with the city.  We need to display the REGULAR image on line 72 in HTML
    as the background image.  ID is #image

            data.results.forEach(photo => {
                $("#result").append(`
                                
                    <img src="${photo.urls.regular}"/>
                `)
            })
        }
    })
})

*/
  // Enter City in input id is search.......COMPLETE

  // Click search button to begin query.......COMPLETE

  // Return top image to results........COMPLETE

  // Update <div> background image to first response........IN PROGRESS


