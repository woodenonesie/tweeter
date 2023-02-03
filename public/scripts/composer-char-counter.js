$(document).ready(function () {

  $("textarea").on("input", function () {
    //getting value of the tweet
    let text = $(this).val();
    //getting access to the counter element
    let form = $(this).siblings("div");
    let counter = form.children(".counter");
    //counts how many characters left
    let remainingChar = 140 - text.length;
    counter.text(remainingChar);
    //if we have negavive ammount, new class added that changes color of the counter
    if (remainingChar < 0) {
      counter.addClass("red")
    } else {
      counter.removeClass("red")
    }
  })
});