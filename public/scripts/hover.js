$(document).ready(function () {

  // const addClass = function(element, newClass) {
  //   element.addClass(newClass);
  // };
  // const removeClass = function(element, newClass) {
  //   element.removeClass(newClass);
  // }
  
  // let article = $("article")

  // article.hover(addClass(article, "hover-shadow"), removeClass(article, "hover-shadow"));
  // $("article").hover(addClass("hover-shadow", this), removeClass("hover-shadow", this));
  // $("icons-article").hover(addClass("selected"), removeClass("selected"));


  $("article").hover(
    function () {
      $(this).addClass("hover-shadow");
    }, function () {
      $(this).removeClass("hover-shadow");
    }
  )

  $("i.fa-flag").hover(
    function () {
      $(this).addClass("selected");
    }, function () {
      $(this).removeClass("selected");
    }
  )

  $("i.fa-retweet").hover(
    function () {
      $(this).addClass("selected");
    }, function () {
      $(this).removeClass("selected");
    }
  )
  $("i.fa-heart").hover(
    function () {
      $(this).addClass("selected");
    }, function () {
      $(this).removeClass("selected");
    }
  )
});