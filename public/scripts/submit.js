$(document).ready(function () {
  //listener for submit event
  $("form").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    //checking if tweets are not empty or longer than 140 characters and
    //changes an error message
    checkError(data)
    //posts data ftom form to /tweets
    $.ajax('/tweets', {
      method: 'POST',
      data
    })
      .then(loadtweets)
  })
})