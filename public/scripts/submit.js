//after pressing submit, valid tweet adds to the page
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
    //changes an error message
    const invalidTweet = checkTweetError(tweet); //scripts/checkError.js
    //posts data ftom form to /tweets
    if (!invalidTweet) {
      $.ajax('/tweets', {
        method: 'POST',
        data
      })
        .then(loadtweets) //function from client.js
        .then($('textarea').val(""))
        .then($(".counter").text(140))
        .fail(handleServerError)
    }
  });
});