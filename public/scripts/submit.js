$(document).ready(function () {
  //listener for submit event
  $("form").on("submit", function (event) {
    //prevents default behevior
    event.preventDefault();
    //serializing data so we can pass it to the server
    const data = $(this).serialize();
    //
    const tweet = $("textarea").val();
    //checking if tweets are not empty or longer than 140 characters and
    checkError(tweet) //scripts/checkError.js
    //changes an error message    
    //posts data ftom form to /tweets
    $.ajax('/tweets', {
      method: 'POST',
      data
    })
      .then(loadtweets) //function from client.js
  })
})