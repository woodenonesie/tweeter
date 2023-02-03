let loadtweets

$(document).ready(function () {
  //escapes unsafe characters
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //convert tweets to html format
  const createTweetElement = function (tweetData) {
    const user = tweetData["user"]
    const date = timeago.format(tweetData["created_at"]);
    const content = tweetData["content"];
    const tweetText = content["text"];
    const safeTweet = escape(tweetText);
    
    const $tweet = `<article>
      <header class="article-header">
        <div class="user-info">
        <img class="avatar" src="${user["avatars"]}"></img>
          <h4> ${user["name"]} </h4>
        </div>
        <h4 class="nickname"> ${user["handle"]} </h4>
      </header>
      <p class="article-tweet"> ${safeTweet}</p>
      <footer class="article-footer">
        <p> ${date} </p>
        <div class="icons-article">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
      </footer>
      </article>
    `

    return $tweet;
  }
  // adds all tweets from database to the page
  const renderTweets = function (tweets) {
    $('#tweets-container').empty();
    // loops through tweets
    for (const tweet of tweets.reverse()) {
      // calls createTweetElement for each tweet
      const newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(newTweet);
    }
  }
  //gets tweets as JSON file from /tweets
  loadtweets = function () {
    $.ajax('http://localhost:8080/tweets ', { method: 'GET' })
      .then(renderTweets)
  }

  loadtweets()

})

