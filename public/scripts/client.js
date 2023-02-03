let loadtweets;
//loads tweets from database to the page
$(document).ready(function() {
  //gets tweets as JSON file from /tweets
  loadtweets = function() {
    $.ajax('http://localhost:8080/tweets ', { method: 'GET' })
      .then(renderTweets); //renderTweets.js
  };
  loadtweets();
});