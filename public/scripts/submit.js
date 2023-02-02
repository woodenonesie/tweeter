$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log(data)
    $.ajax('/tweets', {
      method: 'POST',
      data: data
    })
  })
})