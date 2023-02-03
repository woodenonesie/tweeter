

$(document).ready(function () {
  //listener for submit event
  $("form").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
  
    //checking if tweets are not empty or longer than 140 characters
    if (data.length === 0 || data === null) {
      alert("Your tweet should not be empty")
    } else if (data.length > 139) {
      alert("Your tweet is too long")
    } else {
      //posts data ftom form to /tweets
      $.ajax('/tweets', {
        method: 'POST',
        data
      })
        .then(loadtweets)
    }
  })
})