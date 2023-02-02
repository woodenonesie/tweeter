$(document).ready(function () {
  const createTweetElement = function (tweetObj) {
    const user = tweetData["user"]
    const date = new Date(tweetData["created_at"]);
    const content = tweetData["content"]
    const tweet = `<article>
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
    </article>`
    return tweet;
  }
  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweets-container').append($tweet);
})


