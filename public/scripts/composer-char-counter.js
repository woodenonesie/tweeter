$(document).ready(function () {

  $("textarea").on("input", function () {
    let text = $(this).val();
    let form = $(this).siblings(".button-countdoun");
    let counter = form.children(".counter");
    let remainingChar = 140 - text.length;
    counter.text(remainingChar);
    if (remainingChar < 0) {
      counter.addClass("red")
    } else {
      counter.removeClass("red")
    }
  })
});