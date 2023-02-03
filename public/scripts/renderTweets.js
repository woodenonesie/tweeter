let renderTweets; //used in client.js

// adds all tweets from database to the page
$(document).ready(function() {
  renderTweets = function(tweets) {
    $('#tweets-container').empty();
    // loops through tweets
    for (const tweet of tweets.reverse()) {
      // calls createTweetElement for each tweet
      const newTweet = createTweetElement(tweet); //createTweetElement.js
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(newTweet);
    }
  };
});