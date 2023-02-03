let createTweetElement; //used further in renderTweets.js

//convert tweets to html format
$(document).ready(function() {
  createTweetElement = function(tweetData) {
    //accessing data that we need to create a tweet
    const user = tweetData["user"];
    const date = timeago.format(tweetData["created_at"]);
    const content = tweetData["content"];
    const tweetText = content["text"];
    const safeTweet = escapeUnsafeChar(tweetText); //escape.js
    //tweet template
    const $tweet = `<article>
    <header class="article-header">
      <div>
        <img class="avatar" src="${user["avatars"]}"></img>
        <h4> ${user["name"]} </h4>
      </div>
      <h4 class="handle"> ${user["handle"]} </h4>
    </header>
    <p class="article-content"> ${safeTweet}</p>
    <footer>
      <p> ${date} </p>
      <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>
  `;
    //returns chunck of html code with all the needed information
    return $tweet;
  };
});