$(document).ready(function () {
  //listener for submit event
  $("form").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
  //posts data ftom form to /tweets
    $.ajax('/tweets', {
      method: 'POST',
      data: data
    })
  })
})