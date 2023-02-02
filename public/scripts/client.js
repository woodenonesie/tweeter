$(document).ready(function () {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function (tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(newTweet);
    }
  }
  //adds new tweets in html format
  const createTweetElement = function (tweetData) {
    const user = tweetData["user"]
    const date = new Date(tweetData["created_at"]);
    const content = tweetData["content"]
    const $tweet = `<article>
      <header class="article-header">
        <div class="user-info">
          <i class="avatar" src=${user["avatars"]} alt="avatar"></i>
          <h4> ${user["name"]} </h4>
        </div>
        <h4 class="nickname"> ${user["handle"]} </h4>
      </header>
      <p class="article-tweet"> ${content["text"]}</p>
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
  renderTweets(data);

  const loadtweets = function() {
    $.ajax('http://localhost:8080/tweets ', { method: 'GET' })
  }
})


